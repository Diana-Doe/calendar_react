import * as actionTypes from '../actionTypes';

const initialState = {
    currentUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            const { data } = action.payload;
            return {
                ...state,
                currentUser: data
            };
        default:
            return state;
    }
}