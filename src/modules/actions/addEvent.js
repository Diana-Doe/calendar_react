import {
    ADD_EVENT,
} from "./actionTypes";

const initialState = [];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const newState = [...state];
            const dateEvents = [...newState[action.payload.selectedDate]];
            if (dateEvents !== undefined) {
                newState[action.payload.selectedDate].events =
                    [
                        ...dateEvents.events,
                        {
                            id: dateEvents.events.length + 1,
                            title: action.payload.title,
                            timeRange: {
                                startTime: action.payload.start,
                                endTime: action.payload.end
                            },
                            importance: action.payload.importance
                        },
                    ];
            } else {
                newState[action.payload.selectedDate] = {
                    events: [
                        {
                            id: 1,
                            title: action.payload.title,
                            timeRange: {
                                startTime: action.payload.start,
                                endTime: action.payload.end
                            },
                            importance: action.payload.importance
                        },
                    ]
                };
            };
            return newState;
        default:
            return state;
    }
};

export default Reducer;