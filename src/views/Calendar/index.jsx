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
      selectedDate:
        date.getFullYear() +
        "-" +
        parseInt(date.getMonth() + 1) +
        "-" +
        date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    this.clickBack = this.clickBack.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.onDayClick = this.onDayClick.bind(this);
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
    tempState.selectedDate =
      this.state.year.toString() + "-" + (this.state.month + 1) + "-" + day;
    console.log("hello world", tempState.selectedDate);
    this.setState(tempState);
  };

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
            month={this.state.month}
            year={this.state.year}
          />
          <CalendarEvents selectedDate={this.state.selectedDate} />
        </div>
      </section>
    );
  }
}

export default Layout;
