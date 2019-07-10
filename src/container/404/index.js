import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="d-flex flex-grow-1 align-items-center justify-content-center bg-ulang animated fadeIn">
        <div className="d-flex justify-content-center p-5">
          <div className="text-center text-light">
            <div className="p-5 animated pulse infinite">
              <i
                className="fa fa-exclamation-triangle my-1"
                style={{ fontSize: "12rem" }}
              />
              <h1 className="mt-3 mb-4" style={{ fontSize: "3.5rem" }}>
                404 - Not Found
              </h1>
              <h3>The page you are looking for didn't exist.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
