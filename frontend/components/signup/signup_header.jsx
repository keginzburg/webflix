import React from "react";
import { Link } from "react-router-dom";

class SignUpHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
      return (
        <div className="signup-header-container">
          <div className="signup-header-inner">
            <img src="https://fontmeme.com/permalink/211231/59e1689bbdeb149518599fd21c6562ab.png" alt="netflix-font" border="0" />
            <Link to="/login" className="signup-login-link">Sign In</Link>
          </div>
        </div>
      )
  }
}

export default SignUpHeader;