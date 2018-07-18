import { all, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import {watchSignup} from 'screens/signup/Signup.saga'

export default function* sagas() {
  yield all([
    fork( watchSignup )
  ]);
}
