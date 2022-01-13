import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashPageContainer from "./splash/splash_page_container";
import SignUpContainer from "./signup/signup_page_container";
import LoginContainer from "./login/login_container";
import ManageProfilesContainer from "./profiles/manage_profiles";
import ShowTitleContainer from "./show/show_title";
import BrowseContainer from "./browse/browse_container";
import SearchResult from "./search/search_result";

import { Route, Switch } from "react-router";


const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/ManageProfiles" component={ManageProfilesContainer} />
      <ProtectedRoute path="/search" component={SearchResult} />
      <ProtectedRoute path="/watch/:videoId" component={ShowTitleContainer} />
      <ProtectedRoute path="/browse" component={BrowseContainer} />
      <AuthRoute path="/" component={SplashPageContainer} />
    </Switch>
  </div>

)

// need to implement Protected Routes for Browse and further!

export default App;