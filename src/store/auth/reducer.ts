import {
  Auth,
  AuthActionTypes,
  USER_LOGIN_FAIL,
  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
} from './type';

export const initialState: Auth = {
  loginSuccess: false,
};

export default (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case USER_LOGIN_INIT: {
      return Object.assign({}, state, {
        loginSuccess: initialState.loginSuccess,
      });
    }

    case USER_LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        loginSuccess: action.payload,
      });
    }

    case USER_LOGIN_FAIL: {
      return Object.assign({}, state, {
        loginSuccess: initialState.loginSuccess,
      });
    }

    default:
      return state;
  }
};
