import axios from "axios";
import * as types from "./actionTypes";

const smurfsAPI = "http://localhost:3333/smurfs";

export function clearSmurfs() {
    return {
        type: types.CLEAR_SMURFS,
    }
}

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

export const submit = submitType => dispatch => (formValues, actions) => {
    if (submitType === "add") {
        addSmurf(formValues, actions, dispatch);
    }
}


export const addSmurf = (formValues, actions, dispatch) => {
    axios.post(smurfsAPI, formValues)
        .then(res => {
            const smurfs = res.data;

            dispatch({
                type: types.SET_SMURFS,
                payload: smurfs,
            });
        })
        .catch(err => {
            alert(err);
        })
    actions.resetForm();
}