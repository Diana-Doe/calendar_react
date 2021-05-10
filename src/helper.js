import {DAYS_AT_WEEK} from "./constants";
import _ from "lodash";

export function getCalendarArray(month, year) {
    const today = new Date();
    const numOfDays = new Date(year, month + 1, 0).getDate();       // num of days in cur month
    const firstDay = new Date(year, month, 1).getDay() || 7;       // day of 1st of current month
    const lastDatePrevM = new Date(year, month, 0).getDate();     // last date of previous month
    const nextDays = (7 - (firstDay + numOfDays - 1) % 7) % 7;

    const prevMonth = Array(firstDay - 1).fill(0).map((el, i) => [lastDatePrevM - i, "Calendar-body__date_disabled"]).reverse();
    const curMonth = Array(numOfDays).fill(0).map((el, i) => (i + 1 === today.getDate() && month === today.getMonth() && year === today.getFullYear()) ? [i + 1, "Calendar-body__date_today"] : [i + 1, ""]);
    const nextMonth = Array(nextDays).fill(0).map((el, i) => [i + 1, "Calendar-body__date_disabled"]);

    let arr = [...prevMonth, ...curMonth, ...nextMonth];

    return _.chunk(arr, DAYS_AT_WEEK);
}