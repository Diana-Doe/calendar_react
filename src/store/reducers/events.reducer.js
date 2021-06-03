import * as actionTypes from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EVENTS: {
            const { data } = action.payload;
            return data;
        }
        case actionTypes.ADD_EVENT: {
            const { data, month, year } = action.payload;
            console.log(data);
            console.log(month, year);
            if ( (month == data.date.month) && (year === data.date.year) ) {
                return [
                    ...state,
                    data
                ];
            } else {
                return [
                    ...state
                ];
            }
        }
        case actionTypes.REMOVE_EVENT: {
            const newState = [...state];
                newState.splice(
                  state.findIndex((item) => item.id === action.payload.id),
                  1
                );
                return newState;
        }
        default:
            return state;
    }
}