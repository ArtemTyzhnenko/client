import * as actionTypes from './actionTypes';


let initialState = {
    authenticated: localStorage.getItem('token') || '',
    errorMessage: '',
};

const auth = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.AUTH_USER:
            return{
                ...state,
                authenticated: action.payload,
            };
        case actionTypes.AUTH_ERROR:
            return{
                ...state,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default auth;