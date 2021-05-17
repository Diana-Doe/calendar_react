import React, { Component } from "react";
import "./styles.css";
import eventsData from '../../../../data/index.json';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class CalendarEvents extends Component {
    states = {
        eventsData: null
    }

    getData() {
        const { selectedDate } = this.props;
        const user = 1;
        console.log(this.props)
        this.states.eventsData = eventsData[user][selectedDate];
        if (this.states.eventsData !== undefined) {
            return this.states.eventsData.events.map(item => (
                <div key={item.id} className={item.importance}>
                    <div className="Calendar-events-title">{item.title}</div>
                    <div className="Calendar-events-time">{item.timeRange.startTime} - {item.timeRange.endTime}</div>
                </div>
            ))
        }
        return <div></div>;
    }


    addEvent(e) {
        e.preventDefault();
        console.log('hello world');
    }

    render() {
        return <div className={"Calendar-events"}>
            <span id="Calendar-events-header">EVENTS</span>
            <Link to="/addEvent" classname="button_add">add event</Link>
            {this.getData()}
        </div>
    }
}

export default CalendarEvents;



