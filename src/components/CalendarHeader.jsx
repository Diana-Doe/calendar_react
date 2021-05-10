import React, {Component} from "react";
import "../styles/CalendarHeader.css";
import {MONTHS} from "../constants";

class CalendarHeader extends Component {
    render() {
        const {month, year} = this.props;
        return (
            <form className="Calendar-header">
                <button
                    onClick={this.props.clickBack}
                    className="Calendar-header__button Calendar-header__button_back"
                >
                    left
                </button>

                <span>{MONTHS[month]} {year}</span>

                <button
                    onClick={this.props.clickNext}
                    className="Calendar-header__button Calendar-header__button_next"
                >
                    right
                </button>
            </form>
        );
    }
}

export default CalendarHeader;