import * as types from './action.type.js';

const INIT_STATE = {
    scrollPos_x: 0,
    scrollPos_y: 0,
    scrollPos_ref_x: 0,
    scrollPos_ref_y: 0,
}

const ScrollPosReducer = (state = INIT_STATE, action) => {
    
    switch (action.type) {

        case types.SCROLLX:
            return {
                ...state, scrollPos_x: action.payload
            };

        case types.SCROLLY:
            return {
                ...state, scrollPos_y: action.payload
            }

        case types.SCROLLREFX:
            return {
                ...state, scrollPos_ref_x: action.payload
            };

        case types.SCROLLREFY:
            return {
                ...state, scrollPos_ref_y: action.payload
            }
            default:
                return state;
    }
}

export default ScrollPosReducer;