import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class SignUpHeader extends React.Component {
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
      return (
        <div className="signup-header-container">
          <div className="signup-header-inner">
            <img onClick={this.handleLogoClick} className="root-logo" src={window.webflixLogoMedium} alt="netflix-font" border="0" />
            <Link to="/login" className="signup-login-link">Sign In</Link>
          </div>
        </div>
      )
  }
}

export default withRouter(SignUpHeader);