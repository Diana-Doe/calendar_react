import axios from 'axios';
import { API_URL } from './constants';

const getUrl = endpoint => endpoint ? `${API_URL}/users/${endpoint}` : `${API_URL}/users`;

export const loginUser = async (id) => {
    return await axios.get(getUrl(id))
}

export const registerUser = async (data) => {
    return await axios.post(getUrl(), {
        data: JSON.stringify(data)
      });
}