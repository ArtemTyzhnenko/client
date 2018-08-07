import * as actionTypes from './actionTypes';
import axios from 'axios';

export const signup = (token) => {
    return{
        type: actionTypes.AUTH_USER,
        payload: token,
    }
};

export const signUpUser = (formProps) => {
    return dispatch => {
        return axios.post('http://localhost:3090/signup', formProps)
            .then(response => dispatch(signup(response.data.token)))
            .catch(error => console.log(error))
    }
};

