import axios from 'axios';
// Actions
export const FETCH = 'ys/dictionary/FETCH';
export const FETCHED = 'ys/dictionary/FETCHED';
export const FETCHING = 'ys/dictionary/FETCHING';
export const GET_INVESTOR_TYPES = 'ys/dictionary/GET_INVESTOR_TYPES';


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
export const getInvestorTypesAsync = data => ({
  type: GET_INVESTOR_TYPES,
  data,
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

const fetchInvestorTypes = () => axios.get('/a/api/dic/investorTypes')
  .then(res => res.data.options);

export const getTypes = data => ({
  type: GET_INVESTOR_TYPES,
  data,
});

export function getInvestorTypes() {
  // return function(dispatch) {
  //   dispatch(getTypes());  
  // }
  
  return dispatch => {
    //fetchInvestorTypes()
    //  .then(types => dispatch(getTypes()));
    dispatch(getTypes());
  };
}


export const getHearFromSources = () => dispatch => {
  dispatch(isFetching());
  return axios.get('/a/api/dic/profile/hearFromSource').then(res => {
    dispatch(notFetching());
    dispatch(
      fetched({
        hearFromSources: res.data.range,
      }),
    );
  });
};


// Helper Functions below
