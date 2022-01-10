import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect, connectAdvanced } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => !loggedIn ? <Component {...props} /> : <Redirect to="/browse" />}
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => loggedIn ? <Component {...props} /> : <Redirect to="/" />}
  />
);

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth)
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected)
);

