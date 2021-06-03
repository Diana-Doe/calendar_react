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
    return await axios.post(getUrl(), data);
}

export const deleteEvent = async (id) => {
    return await axios.delete(`${getUrl()}/${id}`);
}