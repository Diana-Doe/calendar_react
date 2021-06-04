import axios from 'axios';
import { API_URL } from './constants';

const getUrl = endpoint => endpoint ? `${API_URL}/users/${endpoint}` : `${API_URL}/users`;

export const loginUser = async (password, email) => {
    return await axios.get(`${getUrl()}?password=${password}&email=${email}`)
}

export const registerUser = async (data) => {
    return await axios.post(getUrl(), data);
}

export const checkEmail = async (email) => {
    return await axios.get(`${getUrl()}?email=${email}`)
}