import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class LoginHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogoClick = this.handleLogoClick.bind(this);
  }

  componentDidMount() {
    
  }

  handleLogoClick(e) {
    this.props.history.push("/");
  }

  render() {
    if (this.props.history.location.pathname === '/') {
      
      return (
        <div className="login-header-container">
          <div className="login-header-inner">
            <img src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            <Link to="/login" className="splash-login-link">Sign In</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className="login-header-container">
          <div className="login-header-inner">
            <img onClick={this.handleLogoClick} className="root-logo" src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            <span></span>
            {/* {(this.props.history.location.pathname === '/login') ? <span></span> : <Link to="/login" className="splash-login-link">Sign In</Link>} */}
          </div>
        </div>
      )
    }
  }
}

export default withRouter(LoginHeader);