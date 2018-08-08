import * as actionTypes from './actionTypes';
import axios from 'axios';

export const signup = (token) => {
    return{
        type: actionTypes.AUTH_USER,
        payload: token,
    }
};
export const signupError = (massage) => {
    return{
        type: actionTypes.AUTH_ERROR,
        payload: massage,
    }
};

export const signUpUser = (formProps, callback) => {
    return dispatch => {
        return axios.post('http://localhost:3090/signup', formProps)
            .then(response => {
                const token = response.data.token;
                dispatch(signup(token));
                localStorage.setItem('token', token);
                callback();
            })
            .catch(() => dispatch(signupError('Email in use')))
    }
};

