import * as actionTypes from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EVENTS:
            const { data } = action.payload;
            return data;
        // case actionTypes.ADD_EVENT:
        //     return [
        //         ...state,
        //         {
        //             id: "e5",
        //             userId: action.payload.user,
        //             // date: {
        //             //     year: action.payload.date[0],
        //             //     month: action.payload.date[1],
        //             //     day: action.payload.date[2],
        //             // },
        //             title: action.payload.event_name,
        //             timeRange: {
        //                 startTime: action.payload.start_time,
        //                 endTime: action.payload.end_time,
        //             },
        //             importance: action.payload.importance,
        //         },
        //     ];
        default:
            return state;
    }
}