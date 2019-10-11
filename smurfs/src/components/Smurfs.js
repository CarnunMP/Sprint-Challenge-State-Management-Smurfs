import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

import Card from "./Card";
export function Smurfs(props) {
    const { smurfs } = props;
    return (
        <div className="smurfs">
            {smurfs.map(smurf => (
                <Card key={smurf.id} id={smurf.id} />
            ))}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Smurfs);