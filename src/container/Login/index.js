import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    let { Login } = this.props.data;
    console.log(this.props.data);
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
                    Login(history);
                  }}
                >
                  Click Here to Login
                </button>
              </center>
            </div>
          </div>
        )}
      />
    );
  }
}
