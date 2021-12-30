import React from "react";
import SplashPage from "./splash/splash_page";
import { Route } from "react-router";

const App = () => (
  <div>
    <Route path="/login" />
    <Route path="/signup" />
    <Route path="/" component={SplashPage} />
  </div>

)

export default App;