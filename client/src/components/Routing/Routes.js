import React from "react";
import { Route, Switch } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Login from "../../components/Auth/Login";

const Routes = () => {
  return (
    <section className="container" style={{ marginTop: "51px" }}>
      <Switch>
        <Route exact path="/" component={Login} />
  
      </Switch>
    </section>
  );
};

export default Routes;
