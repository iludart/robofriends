import { SET_SEARCH_FIELD } from './constants';

const initialState = {
    searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
    console.log(action)
    switch(action.type) {
        case SET_SEARCH_FIELD: 
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}