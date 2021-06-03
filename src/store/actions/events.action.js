import * as actionTypes from '../actionTypes';
import { eventsApi } from '../api';

export const getEvents = (userId, year, month) => (dispatch) => {
    return eventsApi.getEvents(userId, year, month)
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

export const getEventById = (id) => (dispatch) => {
    return eventsApi.getEventById(id)
        .then(data => {
            dispatch({
                type: actionTypes.GET_EVENTS,
                payload: { id, data }
            })
        })
        .catch(e => {
            console.error(e);
        })
}

export const postEvent = (data, month, year) => (dispatch) => {
    return eventsApi.postEvent(data)
        .then(() => {
            dispatch({
                type: actionTypes.ADD_EVENT,
                payload: { data, month, year }
            })
        })
        .catch(e => {
            console.error(e);
        })
}

export const deleteEvent = (id) => (dispatch) => {
    return eventsApi.deleteEvent(id)
        .then(() => {
            dispatch({
                type: actionTypes.REMOVE_EVENT,
                payload: { id }
            })
        })
        .catch(e => {
            console.error(e);
        })
}