import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="d-flex flex-grow-1 align-items-center justify-content-center">
        <div className="d-flex justify-content-center border p-5 bg-warning rounded-circle">
          <div className="text-center text-light p-5 border rounded-circle bg-danger">
            <div className="p-5">
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
