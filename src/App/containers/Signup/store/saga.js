import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as loginActions } from '../../Login/store/duck';
import * as constants from './constants';
import { api } from '../../../../utils/api';

function* signUpWorker(action) {
  const {payload} = action;
  const registerUser = () => api.post('/register', payload);

  try {
    console.log('try')
    const result = yield call(registerUser);
    if (!result.data.success) throw new Error(result.data.error); 
    yield put(loginActions.logInSuccess());
  } catch (error) {
    yield put(loginActions.logInFailure());
    console.log(error)
  }
}

export function* signUpSaga() {
  yield takeLatest(constants.SIGN_UP, signUpWorker);
}