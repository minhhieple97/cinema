import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Detail from './components/content/detail/Detail';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} ></Route>
            <Route exact path="/:id/:name/details" component={Detail} ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
