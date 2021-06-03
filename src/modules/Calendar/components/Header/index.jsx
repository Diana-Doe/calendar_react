import React from "react";
import "./styles.css";
import {MONTHS} from "../constants";
import {leftArrow, rightArrow} from "../../../../images";

const CalendarHeader = (props) => {
    const {month, year} = props;
    return (
        <form className="Calendar-header">
            <button
                onClick={props.clickBack}
                className="Calendar-header__button"
            >
                <img src={leftArrow} className="Calendar-header__button_img" />
            </button>

            <div className="Calendar-header__title">{MONTHS[month]} {year}</div>

            <button
                onClick={props.clickNext}
                className="Calendar-header__button"
            >
                <img src={rightArrow} className="Calendar-header__button_img" />
            </button>
        </form>
    );
}

export default CalendarHeader;