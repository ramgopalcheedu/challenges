import axios from 'axios';

export const FETCHED = 'ys/user/FETCHED';
export const FETCHING = 'ys/user/FETCHING';
export const GET_USER_STATE = 'ys/user/GET_STATE';
export const DO_LOGOUT = 'ys/user/DO_LOGOUT';
export const LOGIN_SUCCESS = 'login_SUCCESS';

export const fetched = data => ({ type: FETCHED, data });

// Initial State
export const initialState = {
  loginTime: null,
  userStateTime: null,
  userState: {
    loggedIn: false,
  },
  profile: {},
};

// Reducer
export default (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case FETCHED:
      return { ...state, ...data };
    case LOGIN_SUCCESS: 
      return { ...state, userState: { loggedIn: true } };
    default:
      return state;
  }
};


export function fetchingStatus(data) {
  return { type: FETCHING, data };
}
export const isFetching = () => fetchingStatus(true);
export const notFetching = () => fetchingStatus(false);
export const getUserState = () => ({ type: GET_USER_STATE });
export const doLogout = () => ({ type: DO_LOGOUT });

// const setLoginTime = () => {
//   const loginTime = new Date().getTime();
//   return fetched({
//     loginTime,
//   });
// };


// export const resetPassword = email => {
//   const resetPasswordData = { email };
//   return function (dispatch) {
//     dispatch(isFetching());
//     dispatch(resetResetPwErrors());
//     return axios
//       .post('/a/api/user/resetPassword', resetPasswordData)
//       .then(response => {
//         dispatch(notFetching());
//         dispatch(fetched({ resetPw: true }));
//         return response;
//       })
//       .catch(error => {
//         dispatch(notFetching());
//         dispatch(notes
//           fetched({
//             resetPwError: true,
//             resetPwErrorMessage: error.response.data.error,
//           }),
//         );
//       });
//   };
// };


export const emailVerify = token => {
  const emailVerifyData = { verification_code: token };
  return axios.post('/a/api/user/emailVerify', emailVerifyData);
};

export const getUserProfile = () => dispatch => {
  dispatch(isFetching());
  return axios.get('/a/api/investor/profile').then(res => {
    dispatch(notFetching());
    dispatch(
      fetched({
        profile: res.data.profile,
      }),
    );
  });
};

export const signupIntent = async (payload, dispatch) => {
  const url = '/a/api/user/signup-intent';
  return axios
    .post(url, _.omit(payload, 'password', 'passwordConfirmation', 'phone')) 
    .then(response => {
      dispatch(notFetching());
      return response;
    })
    .catch(error => error);      
};

export const sendSignupIntent = payload => {
  return dispatch => {
    dispatch(isFetching()); 
    return signupIntent(payload, dispatch);
  };
};

const registerUser = async payload => {
  const url = '/a/api/user/register';
  return axios
    .post(url, payload) 
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const attemptRegister = payload => {
  return dispatch => {
    dispatch(isFetching()); 
    return registerUser(payload, dispatch);
  };
};
