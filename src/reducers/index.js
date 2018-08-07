import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './Auth/reducerAuth'

export default combineReducers({ auth, form: formReducer });
