import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../helpers/firebaseConfig";

import { connect } from "react-redux";
import { Login, Logout } from "../../store/action";

import swal from "sweetalert2";

class Main extends Component {
  startLogin(history, provider) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    let option = "";
    switch (provider) {
      case "facebook":
        option = new firebase.auth.FacebookAuthProvider();
        break;
      case "google":
        option = new firebase.auth.GoogleAuthProvider();
        break;
      case "github":
        option = new firebase.auth.GithubAuthProvider();
        break;
      default:
        break;
    }

    firebase
      .auth()
      .signInWithPopup(option)
      .then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
        console.log(user);
        user = result.user.providerData[0];
        if (option === "google") {
          user = result.user;
        }
        let { email, displayName, photoURL } = user;
        localStorage.token = token;
        localStorage.user = JSON.stringify({ email, displayName, photoURL });
        this.props.Login();
        history.push("/album");
      })
      .catch(error => {
        console.log(error);
        swal.fire("sorry", "error happens when try to login", "error");
      });
  }
  render() {
    return (
      <Route
        render={({ history }) => {
          return !this.props.isLogin ? (
            <div className="container-fluid d-flex flex-column h-100 p-5 flex-grow-1 bg-ulang animated fadeIn">
              <div className="container border d-flex flex-column justify-content-center align-items-center p-5 flex-grow-1 bg-light animated zoomIn delay-1s">
                <div className="row d-flex justify-content-around align-items-center">
                  <center>
                    <img
                      className="img img-rounded-custom mb-2 animated pulse infinite shadow"
                      src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Fff%2FFacebook_logo_36x36.svg%2F480px-Facebook_logo_36x36.svg.png&f=1"
                      alt="facebook logo"
                      onClick={() => {
                        this.startLogin(history, "facebook");
                      }}
                    />
                    <h3
                      className="animated pulse infinite"
                      onClick={() => {
                        this.startLogin(history, "facebook");
                      }}
                    >
                      {" "}
                      Log in using Facebook{" "}
                    </h3>
                  </center>
                  <center className="mx-4">
                    <img
                      className="img img-rounded-custom mb-2 animated pulse infinite shadow"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6qD0bvdhg8epBZN0tz8ZkreQhtfmrOxLzheXaQjvA1ZHw9Fx"
                      alt="github logo"
                      onClick={() => {
                        this.startLogin(history, "github");
                      }}
                    />
                    <h3
                      className="animated pulse infinite"
                      onClick={() => {
                        this.startLogin(history, "github");
                      }}
                    >
                      {" "}
                      Log in using Github{" "}
                    </h3>
                  </center>
                  <center>
                    <img
                      className="img img-rounded-custom mb-2 animated pulse infinite border shadow"
                      src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                      alt="google logo"
                      onClick={() => {
                        this.startLogin(history, "google");
                      }}
                    />
                    <h3
                      className="animated pulse infinite"
                      onClick={() => {
                        this.startLogin(history, "google");
                      }}
                    >
                      {" "}
                      Log in using Google{" "}
                    </h3>
                  </center>
                </div>
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
