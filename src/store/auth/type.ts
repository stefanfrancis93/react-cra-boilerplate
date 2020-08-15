// Actions
export const USER_LOGIN_INIT = 'USER:LOGIN:INIT';
export const USER_LOGIN_SUCCESS = 'USER:LOGIN:SUCCESS';
export const USER_LOGIN_FAIL = 'USER:LOGIN:FAIL';

// State
export interface Auth {
  loginSuccess: boolean;
}

// Action Interface
interface UserLoginInitAction {
  type: typeof USER_LOGIN_INIT;
}

interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: boolean;
}

interface UserLoginFailAction {
  type: typeof USER_LOGIN_FAIL;
}

export type AuthActionTypes = UserLoginInitAction | UserLoginSuccessAction | UserLoginFailAction;
