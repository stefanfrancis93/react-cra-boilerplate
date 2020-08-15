import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { USER_LOGIN_SUCCESS } from 'store/auth/type';
import { initialState } from 'store/rootReducer';

type Props = {
  toggle: (payload: boolean) => void;
  loginSuccess: boolean;
};

const App = (props: Props) => {
  const { toggle, loginSuccess } = props;

  return (
    <>
      <div>App</div>
      <div>{`Logged in: ${loginSuccess}`}</div>
      <button onClick={() => toggle(!loginSuccess)}>Toggle</button>
    </>
  );
};

const mapStateToProps = (state: typeof initialState) => ({
  loginSuccess: state.auth.loginSuccess,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggle: (payload: boolean) => dispatch({ type: USER_LOGIN_SUCCESS, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
