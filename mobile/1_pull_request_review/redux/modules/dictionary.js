import axios from 'axios';
// Actions
export const FETCH = 'ys/dictionary/FETCH';
export const FETCHED = 'ys/dictionary/FETCHED';
export const FETCHING = 'ys/dictionary/FETCHING';
export const GET_INVESTOR_TYPES = 'ys/dictionary/GET_INVESTOR_TYPES';
export const GET_HEARD_FROM_SOURCES = 'ys/dictionary/GET_HEAR_FROM_SOURCES';


// Initial State
export const initialState = {
  assetClasses: {},
  investorTypes: {},
  hearFromSources: {},
  isFetching: false,
};

// Reducer
export default function reducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case FETCHING:
      return { ...state, isFetching: data };

    case FETCHED:
      return { ...state, ...data };

    case GET_INVESTOR_TYPES: 
      return { ...state, investorTypes: data };

    default:
      return state;
  }
}

// Action creators
export function fetched(data) {
  return { type: FETCHED, data };
}
export function fetchingDictionary(data) {
  return { type: FETCHING, data };
}

export const getInvestorTypes = () => ({
  type: GET_INVESTOR_TYPES,
});


export const isFetching = () => fetchingDictionary(true);
export const notFetching = () => fetchingDictionary(false);

export const getAssetClasses = () => dispatch => {
  dispatch(isFetching());
  return axios.get('/a/api/dic/note/assetClasses').then(res => {
    dispatch(notFetching());
    dispatch(
      fetched({
        assetClasses: res.data.assetClasses,
      }),
    );
  });
};

export getHearFromSources = () => {
  type: GET_HEAR_FROM_SOURCES
};


// Helper Functions below
