import * as actionTypes from '../actionTypes';
import { eventsApi } from '../api';

export const getEvents = (userId) => dispatch => {
    return eventsApi.getEvents(userId)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_EVENTS,
                payload: { data: res.data }
            })
        })
        .catch(e => {
            console.error(e);
        })
}

export const getEventById = (id) => dispatch => {
    return eventsApi.getEventById(id)
        .then(data => {
            dispatch({
                type: actionTypes.GET_EVENTS,
                payload: { id, data }
            })
        })
}