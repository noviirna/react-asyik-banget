import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="flex-grow-1 d-flex justify-content-center bg-landing p-5 animated fadeIn">
        <div className="container d-flex flex-column bg-light justify-content-center align-items-center tembus animated zoomIn delay-1s">
          <div className="text-center">
            <h1>Maroon 5 FanPage</h1>
            <p>Do you think you are Maroon 5's #1 Fan? We got your back.</p>
            <Link className="btn btn-info animated pulse infinite " to="/album">
              Start
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
