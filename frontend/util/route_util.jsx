import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/browse" />}
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth)
);