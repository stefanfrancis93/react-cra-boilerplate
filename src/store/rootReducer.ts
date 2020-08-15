import { combineReducers } from 'redux';
import authReducer, { initialState as authState } from 'store/auth/reducer';

export const initialState = {
  auth: authState,
};

export default combineReducers({
  auth: authReducer,
});
