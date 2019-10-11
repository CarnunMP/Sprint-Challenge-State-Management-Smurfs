import * as types from "./actionTypes";

const initialSmurfArray = [
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0
    }
];
export function smurfReducer(smurfs = initialSmurfArray, action) {
    switch (action.type) {
        default:
            return smurfs;
    }
}