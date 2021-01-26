import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Detail from './components/content/detail/Detail';
import ErrorBoundary from './components/error/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
const App = (props) => {
  const routesArray = [
    { id: 1, path: '/', component: Main },
    { id: 2, path: '/:id/:name/details', component: Detail }
  ];
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header></Header>
      </ErrorBoundary>
      <div className="app">
        <Switch>
          {routesArray.map((el) => {
            return (
              <Route
                key={el.id}
                exact
                path={el.path}
                component={el.component}
                {...props}
              ></Route>
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
