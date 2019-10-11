import axios from "axios";
import * as types from "./actionTypes";

const smurfsAPI = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
    axios.get(smurfsAPI)
        .then(res => {
            const smurfs = res.data;
            dispatch({ type: types.SET_SMURFS, payload: smurfs });
        })
        .catch(err=> {
            alert(err);
        });
}