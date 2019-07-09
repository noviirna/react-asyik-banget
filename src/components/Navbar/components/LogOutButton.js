import React, { Component } from "react";
import { Route } from "react-router-dom";
export default class LogOutButton extends Component {
  render() {
    let { isLogin, Logout, Login } = this.props.data;
    if (isLogin) {
      return (
        <Route
          render={({ history }) => (
            <li className="nav-item" onClick={() => Logout(history)}>
              <p className="nav-link">Log Out</p>
            </li>
          )}
        />
      );
    } else {
      return (
        <Route
          render={({ history }) => (
            <li className="nav-item" onClick={() => Login(history)}>
              <p className="nav-link">Log In with Facebook</p>
            </li>
          )}
        />
      );
    }
  }
}
