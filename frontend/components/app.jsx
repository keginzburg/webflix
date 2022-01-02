import React from "react";
import { AuthRoute } from "../util/route_util";

import SplashPageContainer from "./splash/splash_page_container";
import SignUpContainer from "./signup/signup_page_container";
import LoginContainer from "./login/login_container";

// import Browse from "./browse/browse";
import BrowseContainer from "./browse/browse_container";

import { Route, Switch } from "react-router";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <Route path="/browse" component={BrowseContainer} />
      <AuthRoute path="/" component={SplashPageContainer} />
    </Switch>
  </div>

)

// need to implement Protected Routes for Browse and further!

export default App;