import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

const StyledCardDiv = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    max-width: 20rem;
    padding: 1rem 0 1rem 0;
    margin-top: 1rem;
`;


export function Card(props) {
    const { smurfs, id } = props;
    const smurf = smurfs.find(smurf => smurf.id === id);

    return (
        <StyledCardDiv className="smurf-card">
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
        </StyledCardDiv>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Card);