import * as actionTypes from '../actionTypes';
import { usersApi } from '../api';

export const getUser = () => dispatch => {
    dispatch({
        type: actionTypes.GET_USER
    })
}

export const registerUser = (data) => dispatch => {
    return usersApi.registerUser(data)
        .then(() => {
            dispatch({
                type: actionTypes.REGISTER_USER,
                payload: { data }
            })
        })
}