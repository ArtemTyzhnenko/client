import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../reducers/Auth/actions';

class Signup extends  Component {

    onSubmit = (formProps) => {
        this.props.signUpUser(formProps, ()=>{
            this.props.history.push('/feature');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="off"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="off"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign Up!</button>
            </form>
        )
    }
}

const mapStateToProps = ({auth}) =>{
    return{
        errorMessage : auth.errorMessage
    }
};

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' }),
)(Signup);