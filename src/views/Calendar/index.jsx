import React, {Component} from "react";
import CalendarHeader from "../../modules/Calendar/components/Header"
import CalendarBody from "../../modules/Calendar/components/Body"
import "./styles.css";

class Layout extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
            month: date.getMonth(),
            year: date.getFullYear()
        };
        this.clickBack = this.clickBack.bind(this);
        this.clickNext = this.clickNext.bind(this);
        this.changeCalendarHeader = this.changeCalendarHeader.bind(this);
    }

    clickBack(e) {
        e.preventDefault();
        this.changeCalendarHeader(0, 11, -1)
    }

    clickNext(e) {
        e.preventDefault();
        this.changeCalendarHeader(11, 0, 1)
    }

    changeCalendarHeader(ifValue, newMonthValue, move) {
        let tempState = this.state;
        if (tempState.month !== ifValue)
            tempState.month += move;
        else {
            tempState.month = newMonthValue;
            tempState.year += move;
        }
        this.setState(tempState);
    }

    render() {
        return (
            <div>
                <CalendarHeader
                    clickBack={this.clickBack}
                    clickNext={this.clickNext}
                    month={this.state.month}
                    year={this.state.year}
                />
                <CalendarBody month={this.state.month} year={this.state.year}/>
            </div>
        );
    }

}

export default Layout;