import * as actionTypes from './actionTypes';


let initialState = {
    authenticated: '',
    errorMessage: '',
};

const auth = (state = initialState, action) =>{
    switch (action.type){
        case actionTypes.AUTH_USER:
            return{
                ...state,
                authenticated: action.payload,
            };
        default:
            return state;
    }
};

export default auth;