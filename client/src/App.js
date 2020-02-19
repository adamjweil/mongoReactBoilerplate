import React, { useEffect, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Routes from "./components/Routing/Routes";
// Redux
import store from "./store";
import { fetchUser } from "./actions/user";
import setAuthToken from "./utils/setAuthToken";
import { connect } from "react-redux";

import Login from './components/Auth/Login'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  );
};

export default connect()(App);
