import * as actionTypes from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return state;
        default:
            return state;
    }
}