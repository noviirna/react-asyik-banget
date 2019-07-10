import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { checkLogin } from "../store/action";

class PrivateRoute extends Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    let { component } = this.props;
    let CustomCom = component;
    console.log(this.props.isLogin, "ini props dari store");
    console.log(store.getState().isLogin);
    return (
      <Route
        render={props =>
          store.getState().isLogin ? (
            <CustomCom />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
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
)(PrivateRoute);
