import React, { useState, Component } from "react";
import "./styles.css";
import eventsData from '../../../../data/index.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddEvent from "../../../AddEvent";
import { Button } from "@material-ui/core";


const CalendarEvents = (selectedDate) => {
    const [ open, setOpen ] = useState(false);
    const states = {
        eventsData: null
    }

    const getData = () => {
        const user = 1;
        states.eventsData = eventsData[user][selectedDate.selectedDate];
        if (states.eventsData !== undefined) {
            return states.eventsData.events.map(item => (
                <div key={item.id} className={item.importance}>
                    <div className="Calendar-events-title">{item.title}</div>
                    <div className="Calendar-events-time">{item.timeRange.startTime} - {item.timeRange.endTime}</div>
                </div>
            ))
        }
        return <div></div>;
    }


    // const addEvent = (e) => {
    //     e.preventDefault();
    //     console.log('hello world');
    // }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return <div className={"Calendar-events"}>
        <span id="Calendar-events-header">EVENTS {selectedDate.selectedDate}</span>
        {/* <Link to="/addEvent" id="button_add">add event</Link> */}
        <Button
            color="primary"
            fullWidth
            variant="contained"
            class="LoginForm__button"
            onClick={handleClickOpen}
        >
            ADD EVENT
          </Button>
        <AddEvent
            open={open}
            handleClose={handleClose}
        />
        {getData()}
    </div>
}

export default CalendarEvents;



