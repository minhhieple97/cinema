import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Detail from './components/content/detail/Detail';
import ErrorBoundary from './components/error/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { appRoutes } from './redux/actions';
const App = (props) => {
  const routesArray = [
    { id: 1, path: '/', component: Main },
    { id: 2, path: '/:id/:name/details', component: Detail }
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appRoutes(routesArray))
    // eslint-disable-next-line
  }, [dispatch])
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
