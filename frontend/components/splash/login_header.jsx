import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="login-header-container">
      <img src="https://fontmeme.com/permalink/211230/41cf7cbb25db50b3ef62ace2f2463698.png" alt="netflix-font" border="0" />
      <Link to="/login">Sign In</Link>
    </div>
  )
}

export default LoginHeader;