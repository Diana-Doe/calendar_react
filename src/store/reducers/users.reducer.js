import * as actionTypes from '../actionTypes';

const initialState = {
    currentUser: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:{
            const { data } = action.payload;    
            if (data.length === 0)
                return {currentUser: null};
            console.log("data reducer", data);
            return {currentUser: data[0].id};
        }
        default:
            return state;
    }
}