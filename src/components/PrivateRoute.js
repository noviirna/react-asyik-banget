import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import store from "../store";

export default class PrivateRoute extends Component {
  render() {
    let { data, component } = this.props;
    let CustomCom = component;
    console.log(data.isLogin);
    console.log(store.getState("isLogin").isLogin);
    // store.getState("isLogin").isLogin === true ?
    return (
      <Route
        render={props =>
          store.getState("isLogin").isLogin === true ? (
            <CustomCom data={data} />
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
}
