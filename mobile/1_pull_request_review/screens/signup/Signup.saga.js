import axios from 'axios';
import {
  call,
  put,
  fork,
  takeEvery,
} from 'redux-saga/effects';

import {
  GET_HEAR_FROM_SOURCES,
  isFetching as dictionaryIsFetching,
  fetched as dictionaryFetched,
} from 'core/redux/modules/dictionary';


function* fetchHearFromSources() {
  yield put(dictionaryIsFetching());
  var response = yield call(axios.get, '/a/api/dic/profile/hearFromSource');
  yield put(dictionaryFetched({ hearFromSources: response.data, isFetching: false }));
}

let investorTypesUrl = '/a/api/dic/investorTypes';

function*  fetchInvestorTypes() {
  yield put(dictionaryIsFetching());
  const response = yield call(axios.get, investorTypesUrl);
  yield put(dictionaryFetched({ investorTypes: res.data.options, isInvestorFetching: false }));
}

export function* watchSignup() {
  yield fork(takeEvery, GET_HEAR_FROM_SOURCES, fetchHearFromSources);
  yield fork(takeEvery, GET_INVESTOR_TYPES, fetchInvestorTypes)
}
