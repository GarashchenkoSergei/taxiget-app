import { combineReducers } from 'redux';
import { loginReducer } from '../../containers/Login/store/duck';
import { signUpReducer } from '../../containers/Signup/store/duck'

export const rootReducer = combineReducers({ loginReducer, signUpReducer });
