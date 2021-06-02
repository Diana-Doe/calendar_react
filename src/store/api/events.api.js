import axios from 'axios';
import { API_URL } from './constants';

const getUrl = endpoint => endpoint ? `${API_URL}/events/${endpoint}` : `${API_URL}/events`;

export const getEvents = async (userId, year, month) => {
    return await axios.get(`${getUrl()}?userId=${userId}&date.year=${year}&date.month=${month}`);
}

export const getEventById = async (id) => {
    return await fetch(getUrl(id));
}

export const postEvent = async (data) => {
    console.log(1, data);
    return await axios.post(getUrl(), data);
    //  {id: "e5",
    // userId: 1,
    // date: {
    //   year: "2021",
    //   month: "5",
    //   day: "15"
    // }});// JSON.stringify(data));
}