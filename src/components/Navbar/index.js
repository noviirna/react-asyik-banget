import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./components/LogOutButton";

export default class Navbar extends Component {
  render() {
    let { isLogin, Logout, Login } = this.props.data;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <p className="navbar-brand">Maroon 5 FanPage</p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                Album List
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <LogOutButton data={{ isLogin, Logout, Login }} />
          </ul>
        </div>
      </nav>
    );
  }
}
