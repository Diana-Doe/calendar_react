import * as actionTypes from '../actionTypes';
import { usersApi } from '../api';

export const loginUser = (password, email) => (dispatch) => {
    return usersApi.loginUser(password, email)
        .then(res => {
            dispatch({
                type: actionTypes.LOGIN_USER,
                payload: { data: res.data }
            })
        })
        .catch(e => {
            console.error(e);
        })
    
}

export const registerUser = (data) => (dispatch) => {
    return usersApi.registerUser(data)
        .catch(e => {
            console.error(e);
        })
}

export const checkEmail = (email) => (dispatch) => {
    return usersApi.checkEmail(email)
        .then(res => {
            dispatch({
                type: actionTypes.LOGIN_USER,
                payload: { data: res.data }
            })
        })
        .catch(e => {
            console.error(e);
        })
    
}
