import React from "react";
import SplashPage from "./splash/splash_page";
//import SplashPageContainer from "./splash/splash_page_container";

//import SignUp from "./signup/signup_page";
import SignUpContainer from "./signup/signup_page_container";

//import Login from "./login/login";
import LoginContainer from "./login/login_container";

import Browse from "./browse/browse";

import { Route, Switch } from "react-router";

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/browse" component={Browse} />
      <Route path="/" component={SplashPage} />
    </Switch>
  </div>

)

export default App;