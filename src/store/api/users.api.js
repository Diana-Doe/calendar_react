import { API_URL } from './constants';

const getUrl = endpoint => endpoint ? `${API_URL}/users/${endpoint}` : `${API_URL}/users`;

export const getUser = async (id) => {
    return await fetch(getUrl(id))
}

export const registerUser = async (data) => {
    return await fetch(getUrl(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
}