import * as actionTypes from '../actionTypes';
import { usersApi } from '../api';

export const loginUser = (id) => dispatch => {
    return usersApi.loginUser(id)
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
        .then(() => {
            dispatch({
                type: actionTypes.REGISTER_USER,
                payload: { data }
            })
        })
}