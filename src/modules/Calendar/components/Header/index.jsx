import React, {Component} from "react";
import "./styles.css";
import {MONTHS} from "../constants";
import {leftArrow, rightArrow} from "../../../../images";

class CalendarHeader extends Component {
    render() {
        const {month, year} = this.props;
        return (
            <form className="Calendar-header">
                <button
                    onClick={this.props.clickBack}
                    className="Calendar-header__button"
                >
                    <img src={leftArrow} className="Calendar-header__button_img" />
                </button>

                <div className="Calendar-header__title">{MONTHS[month]} {year}</div>

                <button
                    onClick={this.props.clickNext}
                    className="Calendar-header__button"
                >
                    <img src={rightArrow} className="Calendar-header__button_img" />
                </button>
            </form>
        );
    }
}

export default CalendarHeader;