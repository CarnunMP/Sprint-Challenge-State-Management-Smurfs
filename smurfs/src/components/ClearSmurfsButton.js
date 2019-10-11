import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function ClearSmurfsButton(props) {
    const { clearSmurfs } = props;
    
    return (
        <button onClick={clearSmurfs}>Clear</button>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ClearSmurfsButton);