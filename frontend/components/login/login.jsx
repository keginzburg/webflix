import React from "react";
import LoginHeaderContainer from '../splash/login_header_container';
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className='login-background'>
        <div className='login-container'>
          <div className='main-splash-container'>
            {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_small.jpg" className="splash-background" alt="background image of webflix titles" /> */}
            <div className='header-login-form-container'>
              <LoginHeaderContainer />
              <div className="login-form">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="login-input-div">
                    <label>Email
                      <input type="text" value={this.state.email} onChange={this.update('email')} />
                    </label>
                    <label>Password
                      <input type="password" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <button type="submit">Sign In</button>
                  </div>
                </form>
                <div className="new-to-webflix">
                  <p>New to Webflix?</p>
                  <Link to="/signup">Sign up now.</Link>
                </div>

              </div>
            </div>
          </div>
          <footer>
            <div className='links-wrapper'>
              <p>Questions? Call 305-962-6631</p>

              <ul>
                <li>
                  <a href="https://github.com/keginzburg/webflix">GitHub</a>
                </li>
                <li>
                  <a href="#">My AngelList</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kyleginzburg/">My LinkedIn</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Login;