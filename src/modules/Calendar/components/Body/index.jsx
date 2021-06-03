import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import "./styles.css";
import { DAY_NAMES } from '../constants';
import { getCalendarArray } from '../helper';
import { eventsActions } from "../../../../store/actions";
import { eventsSelectors } from "../../../../store/selectors";


const CalendarBody = (props) => {
    const { month, year } = props;
    const items = useSelector(eventsSelectors.getAllEvents);
    const dispatch = useDispatch();
    const user = 1;

    useEffect(() => {
        dispatch(eventsActions.getEvents(user, year, month + 1));
    }, [props.month, props.year]);

    const renderDayNames = () => {
        return <div>{_.map(DAY_NAMES, (day, i) => <span key={i} className={"Calendar-body__day-name"}>{day}</span>)}</div>
    }

    const renderCalendarBody = () => {
        const days = Object.values(items).map((item) => item.date.day);
        let calendar = getCalendarArray(month, year);
        for (var i = 0; i < calendar.length; i++) {
            for (var j = 0; j < 7; j++) {
                if ((calendar[i][j][1] === "") && (days.includes(calendar[i][j][0]))) {
                    calendar[i][j][1] = "Calendar-body__date_point";
                }
            }
        }

        return <div className={"Calendar-body__month"}>
            {_.map(calendar, (w, i) =>
                <div key={i.toString()} className={"Calendar-body__week"}>
                    {_.map(w, (d, i) => {
                        if (d[1] === "Calendar-body__date_disabled") {
                            return <div key={i.toString()} className={`Calendar-body__date Calendar-body__date_disabled`}>{d[0]}</div>
                        }
                        return <div key={i.toString()} onClick={props.onDayClick(d[0])} className={`Calendar-body__date ${d[1]}`}>{d[0]}</div>
                    })}
                </div>)
            }
        </div>;
    }

    return (
        <div className={"Calendar-body"}>
            {renderDayNames()}
            {renderCalendarBody()}
            <button
                variant="contained"
                className="today__button"
                onClick={props.onToday}
            >
                TODAY
        </button>
        </div>
    )
}

export default CalendarBody;