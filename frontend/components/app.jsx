import React from "react";
import SplashPageContainer from "./splash/splash_page_container";
import SignUpContainer from "./signup/signup_page_container";
import LoginContainer from "./login/login_container";

// import Browse from "./browse/browse";
import BrowseContainer from "./browse/browse_container";

import { Route, Switch } from "react-router";

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/browse" component={BrowseContainer} />
      <Route path="/" component={SplashPageContainer} />
    </Switch>
  </div>

)

export default App;