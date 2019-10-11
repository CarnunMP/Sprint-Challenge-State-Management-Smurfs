import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function GetSmurfsButton(props) {
    const { getSmurfs } = props;
    
    return (
        <button onClick={getSmurfs}>Get Smurfs</button>
    )
}

export default connect(
    state => state,
    actionCreators,
)(GetSmurfsButton);