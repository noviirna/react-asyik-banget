import React, { Component } from "react";
import { Route } from "react-router-dom";
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
    return (
      <Route
        render={({ history }) => (
          <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang">
            <div className="container border d-flex flex-column justify-content-center align items-center p-5 flex-grow-1 bg-light">
              <center>
                <div className="my-5">
                  <div className="flower-spinner">
                    <div className="dots-container">
                      <div className="bigger-dot">
                        <div className="smaller-dot" />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    this.startLogin(history);
                  }}
                >
                  Click Here to Login {JSON.stringify(this.props.isLogin)}
                </button>
              </center>
            </div>
          </div>
        )}
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
