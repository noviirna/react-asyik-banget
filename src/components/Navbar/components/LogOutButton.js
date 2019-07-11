import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Login, Logout } from "../../../store/action";

import swal from "sweetalert2";

import firebase from "firebase";

class LogOutButton extends Component {
  startLogin(history) {
    history.push("/login");
  }

  startLogout(history) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.Logout();
        localStorage.clear();
        setTimeout(() => {
          history.push("/");
        }, 500);
      })
      .catch(err => {
        swal.fire(
          "sorry",
          "error happens when try to logout, check your internet connection",
          "error"
        );
      });
  }

  render() {
    if (this.props.isLogin) {
      return (
        <Route
          render={({ history }) => (
            <li className="nav-item" onClick={() => this.startLogout(history)}>
              <p className="nav-link">Log Out</p>
            </li>
          )}
        />
      );
    } else {
      return (
        <Route
          render={({ history }) => (
            <li className="nav-item" onClick={() => this.startLogin(history)}>
              <p className="nav-link">Log In</p>
            </li>
          )}
        />
      );
    }
  }
}

const mapStateToProps = ({ isLogin }) => {
  return {
    isLogin
  };
};

const mapDispatchToProps = { Login, Logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOutButton);
