import { all } from 'redux-saga/effects';
import { loginSaga } from '../../containers/Login/store/saga';
import { signUpSaga } from '../../containers/Signup/store/saga';

export function* rootSaga() {
  yield all([loginSaga(), signUpSaga()]);
}