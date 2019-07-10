import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./components/LogOutButton";
import { connect } from "react-redux";
import { checkLogin } from "../../store/action";

class Navbar extends Component {
  componentDidMount() {
    this.props.checkLogin();
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <Link to="/" className="navbar-brand">
          Maroon 5 FanPage
        </Link>
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
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/album">
                Album List
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <LogOutButton />
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ isLogin }) => {
  return {
    isLogin
  };
};

const mapDispatchToProps = { checkLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
