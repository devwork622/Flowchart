import * as types from './action.type.js';

export const countVisit= (payload) => {
    return ({
        type: types.COUNTVISIT,
        payload
    });
}

export const countProcedure = (payload) => {
    return ({
        type: types.COUNTPROCEDURE,
        payload
    });
}
