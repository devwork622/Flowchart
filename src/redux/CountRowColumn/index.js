import * as types from './action.type.js';

const INIT_STATE = {
    count_visit: 0,
    count_procedure: 0,
}

const CountReducer = (state = INIT_STATE, action) => {
    
    switch (action.type) {

        case types.COUNTVISIT:
            return { ...state, count_visit: action.payload };

        case types.COUNTPROCEDURE:
            return {...state, count_procedure: action.payload}

        default:
            return state;
    }
}

export default CountReducer;