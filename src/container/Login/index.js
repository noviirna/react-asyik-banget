import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../firebaseConfig";

import { connect } from "react-redux";
import { Login, Logout } from "../../store/action";

import swal from "sweetalert2";

class Main extends Component {
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
        history.push("/album");
      })
      .catch(error => {
        swal.fire("sorry", "error happens when try to login", "error");
      });
  }
  render() {
    // console.log(this.props.location, "halaman login index");
    return (
      <Route
        render={({ history }) => {
          console.log(history);
          return !this.props.isLogin ? (
            <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang">
              <div className="container border d-flex flex-column justify-content-center align items-center p-5 flex-grow-1 bg-light">
                <center>
                  <img
                    className="img img-rounded-custom"
                    src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Fff%2FFacebook_logo_36x36.svg%2F480px-Facebook_logo_36x36.svg.png&f=1"
                    alt="facebook logo"
                    onClick={() => {
                      this.startLogin(history);
                    }}
                  />
                </center>
              </div>
            </div>
          ) : (
            <Redirect
              to={{
                pathname: "/album",
                state: history.location.state
              }}
            />
          );
        }}
      />
    );
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
)(Main);
