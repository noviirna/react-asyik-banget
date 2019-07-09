import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../helpers/Auth";

function PrivateRoute({ component: Component, data }) {
  return (
    <Route
      render={props =>
        Auth.isLogin ? (
          <Component data={data} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
