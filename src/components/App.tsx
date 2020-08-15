import Test from 'components/Test';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/index';

const App = () => {
  return (
    <Provider store={store}>
      <div>App</div>
      <Test />
    </Provider>
  );
};

export default App;
