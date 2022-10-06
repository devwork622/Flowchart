import * as types from './action.type.js';

export const scrollX = (payload) => {
    return ({
        type: types.SCROLLX,
        payload
    });
}

export const scrollY = (payload) => {    
    return ({
        type: types.SCROLLY,
        payload
    });
}

export const scrollRefX = (payload) => {
    return ({
        type: types.SCROLLREFX,
        payload
    });
}

export const scrollRefY = (payload) => {    
    return ({
        type: types.SCROLLREFY,
        payload
    });
}
