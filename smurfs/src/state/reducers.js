import * as types from "./actionTypes";

const initialSmurfArray = [];
export function smurfReducer(smurfs = initialSmurfArray, action) {
    switch (action.type) {
        case types.SET_SMURFS:
            return action.payload;
        case types.CLEAR_SMURFS:
            return [];
        default:
            return smurfs;
    }
}

const initialFormValues = {
    name: "",
    age: "",
    height: "",
}
export function newSmurfFormReducer(formValues = initialFormValues, action) {
    switch (action.type) {
        default:
            return formValues;
    }
}