import React from "react";
import { Link } from "react-router-dom";

class LoginHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    if (this.props.history.location.pathname === '/signup') {
      
      return (
        <div className="signup-header-container">
          <div className="signup-header-inner">
            <img src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            <Link to="/login" className="signup-login-link">Sign In</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="login-header-container">
          <div className="login-header-inner">
            <img src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            {(this.props.history.location.pathname === '/login') ? <span></span> : <Link to="/login" className="splash-login-link">Sign In</Link>}
          </div>
        </div>
      )
    }
  }
}

export default LoginHeader;