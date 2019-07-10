import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { Login, Logout } from "../../../store/action";

import swal from "sweetalert2";

import firebase from "firebase";
import firebaseConfig from "../../../helpers/firebaseConfig";

class LogOutButton extends Component {
  startLogin(history) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        user = result.user.providerData[0];
        let { email, displayName, photoURL } = user;
        localStorage.token = token;
        localStorage.user = JSON.stringify({ email, displayName, photoURL });
        this.props.Login();
        setTimeout(() => {
          history.push("/album");
        }, 500);
      })
      .catch(error => {
        swal.fire("sorry", "error happens when try to login", "error");
      });
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
              <p className="nav-link">Log In with Facebook</p>
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
