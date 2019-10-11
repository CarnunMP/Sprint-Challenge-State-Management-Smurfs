import * as types from "./actionTypes";

const initialSmurfArray = [];
export function smurfReducer(smurfs = initialSmurfArray, action) {
    switch (action.type) {
        case types.SET_SMURFS:
            return action.payload;
        default:
            return smurfs;
    }
}