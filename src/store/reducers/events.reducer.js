import * as actionTypes from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EVENTS:
            const { data } = action.payload;
            return {
                ...state,
                ...data
            };
        default:
            return state;
    }
}