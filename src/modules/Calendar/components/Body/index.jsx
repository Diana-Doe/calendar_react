import React, {Component} from "react";
import _ from "lodash";
import "./styles.css";
import { DAY_NAMES } from '../constants';
import {getCalendarArray} from '../helper';


class CalendarBody extends Component {
    
    get calendarArray() {
        const { month, year } = this.props;
        return getCalendarArray(month, year);
    }

    renderDayNames() {
        return <div>{_.map(DAY_NAMES, (day, i) => <span key={i} className={"Calendar-body__day-name"}>{day}</span>)}</div>
    }

    renderCalendarBody() {
        return <div className={"Calendar-body__month"}>
            {_.map(this.calendarArray, (w, i) =>
                <div key={i.toString()} className={"Calendar-body__week"}>
                    {_.map(w, (d, i) =>
                        <div key={i.toString()} onClick={this.props.onDayClick(d[0])} className={`Calendar-body__date ${d[1]}`}>{d[0]}</div>)
                    }
                </div>)
            }
        </div>;
    }

    render() {
        return <div className={"Calendar-body"}>
            {this.renderDayNames()}
            {this.renderCalendarBody()}
        </div>
    }

}

export default CalendarBody;