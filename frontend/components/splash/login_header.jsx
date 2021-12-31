import React from "react";
import { Link } from "react-router-dom";

class LoginHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    debugger
  }

  render() {
    
    return (
      <div className="login-header-container">
        <div className="login-header-inner">
          <img src="https://fontmeme.com/permalink/211231/59e1689bbdeb149518599fd21c6562ab.png" alt="netflix-font" border="0" />
          {(this.props.history.location.pathname === '/login') ? <span></span> : <Link to="/login" className="splash-login-link">Sign In</Link>}
        </div>
      </div>
    )
  }
}

export default LoginHeader;