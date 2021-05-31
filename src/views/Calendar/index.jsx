import React, { Component } from "react";
import CalendarHeader from "../../modules/Calendar/components/Header";
import CalendarBody from "../../modules/Calendar/components/Body";
import CalendarEvents from "../../modules/Calendar/components/EventList";
import "./styles.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };
    this.clickBack = this.clickBack.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
    this.onToday = this.onToday.bind(this);
    this.changeCalendarHeader = this.changeCalendarHeader.bind(this);
  }

  clickBack(e) {
    e.preventDefault();
    this.changeCalendarHeader(0, 11, -1);
  }

  clickNext(e) {
    e.preventDefault();
    this.changeCalendarHeader(11, 0, 1);
  }

  onDayClick = (day) => (e) => {
    e.preventDefault();
    let tempState = this.state;
    tempState.day = day;
    this.setState(tempState);
  };

  onToday(e) {
    e.preventDefault();
    const today = new Date();
    let tempState = this.state;
    tempState.year = today.getFullYear();
    tempState.month = today.getMonth();
    tempState.day = today.getDate();
    this.setState(tempState);
  }

  changeCalendarHeader(ifValue, newMonthValue, move) {
    let tempState = this.state;
    if (tempState.month !== ifValue) tempState.month += move;
    else {
      tempState.month = newMonthValue;
      tempState.year += move;
    }
    this.setState(tempState);
  }

  render() {
    return (
      <section className="calendar">
        <div>
          <CalendarHeader
            clickBack={this.clickBack}
            clickNext={this.clickNext}
            month={this.state.month}
            year={this.state.year}
          />

          <CalendarBody
            onDayClick={this.onDayClick}
            onToday={this.onToday}
            month={this.state.month}
            year={this.state.year}
          />
          <CalendarEvents
            year={this.state.year}
            month={this.state.month}
            day={this.state.day}
          />
        </div>
      </section>
    );
  }
}

export default Layout;
