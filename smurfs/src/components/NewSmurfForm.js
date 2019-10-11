import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function NewSmurfForm(props) {
    const { formValues, addSmurf } = props;

    return (
        <div className="new-smurf-form">
            <Formik 
                initialValues={formValues}
                onSubmit={addSmurf}
                render={props => {
                    return (
                        <Form>
                            <div>
                                <Field name="name" type="text" placeholder="Name"/>
                            </div>
                            <div>
                                <Field name="age" type="number" placeholder="Age" />
                            </div>
                            <div>
                                <Field name="height" type="text" placeholder="Height" />
                            </div>
                            <button type="submit">Add Smurf</button>
                        </Form>
                    )
                }}
            />
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(NewSmurfForm);