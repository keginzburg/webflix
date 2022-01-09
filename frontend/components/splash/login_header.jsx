import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class LoginHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  componentDidMount() {
    
  }

  handleLogoClick(e) {
    <Redirect to="/" />
  }

  render() {
    if (this.props.history.location.pathname === '/signup') {
      
      return (
        <div className="signup-header-container">
          <div className="signup-header-inner">
            <img onClick={this.handleLogoClick} src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            <Link to="/login" className="signup-login-link">Sign In</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="login-header-container">
          <div className="login-header-inner">
            <img onClick={this.handleLogoClick} className="root-logo" src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            {(this.props.history.location.pathname === '/login') ? <span></span> : <Link to="/login" className="splash-login-link">Sign In</Link>}
          </div>
        </div>
      )
    }
  }
}

export default LoginHeader;