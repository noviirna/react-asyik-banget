import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import store from "../../store";
import { connect } from "react-redux";
import { checkLogin } from "../../store/action";

class PrivateRoute extends Component {
  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    let { component } = this.props;
    let CustomCom = component;
    return (
      <Route
        render={props =>
          store.getState().isLogin ? (
            <CustomCom {...this.props} {...props} />
          ) : (
            <Redirect
              {...this.props}
              {...props}
              to={{
                pathname: "/login",
                state: { from: this.props.location }
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
