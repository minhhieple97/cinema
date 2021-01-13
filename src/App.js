import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Header from './components/header/Header';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header></Header>
      </div>
    </Provider>
  );
};
export default App;
