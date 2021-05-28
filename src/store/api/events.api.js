import axios from 'axios';
import { API_URL } from './constants';

const getUrl = endpoint => endpoint ? `${API_URL}/events/${endpoint}` : `${API_URL}/events`;

export const getEvents = async (userId) => {
    return await axios.get(`${getUrl()}?userId=${userId}`);
}

export const getEventById = async (id) => {
    return await fetch(getUrl(id));
}