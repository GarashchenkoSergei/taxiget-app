import { takeLatest, call, put } from 'redux-saga/effects';
import { actions } from './duck';
import * as constants from './constants';
import { api } from '../../../../utils/api';

function* loginWorker(action) {
  const {payload} = action;
  const fetchLogin = () => api.post('/auth', payload);

  try {
    const result = yield call(fetchLogin);
    if (!result.data.success) throw new Error(result.data.error); 
    yield put(actions.logInSuccess());
  } catch (error) {
    yield put(actions.logInFailure());
  }
}

export function* loginSaga() {
  yield takeLatest(constants.LOG_IN, loginWorker);
}