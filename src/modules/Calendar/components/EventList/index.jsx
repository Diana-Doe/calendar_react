import React, { useState, Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import AddEvent from "../../../AddEvent";
import { Button } from "@material-ui/core";
import { eventsActions } from "../../../../store/actions";
import { eventsSelectors } from "../../../../store/selectors";
import { MONTHS } from "../constants";

const CalendarEvents = (props) => {
  const items = useSelector(eventsSelectors.getAllEvents);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsActions.getEvents(1, props.year, props.month + 1));
  }, [props.month, props.year]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div class="Calendar-events">
      <span id="Calendar-events-header">
        EVENTS - {props.day} {MONTHS[props.month]} {props.year}
      </span>
      <Button
        color="primary"
        fullWidth
        variant="contained"
        class="events__button"
        onClick={handleClickOpen}
      >
        ADD EVENT
      </Button>
      <AddEvent open={open} handleClose={handleClose} />

      {Object.values(items).map((item) => {
        console.log(item.date.day, props.day, props.month + 1, props.year);
        if (item.date.day == props.day) {
          return <div key={item.id} class={item.importance}>
            <div class="Calendar-events-title">{item.title}</div>
            <div class="Calendar-events-time">
              {item.timeRange.startTime} - {item.timeRange.endTime}
            </div>
          </div>
        }
      })}
    </div>
  );
};

export default CalendarEvents;
