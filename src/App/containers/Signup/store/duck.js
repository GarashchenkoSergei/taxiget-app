import * as constants from './constants';
import { createAction } from 'redux-actions';

export const actions = {
  signUp: createAction(constants.SIGN_UP),
};

export const signUpReducer = (state = null, action) => {
  switch (action.type) {
    case constants.SIGN_UP:
      return { ...state};
    default:
      return state;
  }
};
