import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import AddEvent from "../../../AddEvent";
import { eventsActions } from "../../../../store/actions";
import { eventsSelectors } from "../../../../store/selectors";
import { MONTHS } from "../constants";

const CalendarEvents = (props) => {
  const items = useSelector(eventsSelectors.getAllEvents);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = 1;

  useEffect(() => {
    dispatch(eventsActions.getEvents(user, props.year, props.month + 1));
  }, [props.month, props.year, open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = ()  => {
    setOpen(false);
  };

  const removeEvent = (id) => (e) => {
    e.preventDefault();
    dispatch(eventsActions.deleteEvent(id));
  };

  return (
    <div className="Calendar-events">
      <span id="Calendar-events-header">
        EVENTS - {props.day} {MONTHS[props.month]} {props.year}
      </span>
      <button
        variant="contained"
        className="events__button"
        onClick={handleClickOpen}
      >
        ADD EVENT
      </button>

      <AddEvent open={open} handleClose={handleClose} month={props.month} year={props.year} />

      {Object.values(items).map((item) => {
        if (item.date.day == props.day) {
          return <div key={item.id} className={item.importance}>
            <div className="Calendar-events-title">{item.title}</div>
            <div className="Calendar-events-time">
              {item.timeRange.startTime} - {item.timeRange.endTime}
            </div>
            <button
              variant="contained"
              className="remove__button"
              onClick={removeEvent(item.id)}
            >
              -
            </button>
          </div>
        }
      })}
    </div>
  );
};

export default CalendarEvents;
