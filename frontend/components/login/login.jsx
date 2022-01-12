import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import LoginHeaderContainer from '../splash/login_header_container';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      email: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchAllVideos();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({ email: "", password: "" });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Redirect to="/browse" />
      )
    } else {
      return (
        <div className='login-background'>
          <div className='login-container'>
            <div className='main-splash-container'>
              {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_small.jpg" className="splash-background" alt="background image of webflix titles" /> */}
              <div className='header-login-form-container'>
                <LoginHeaderContainer />
                <div className="login-body">
                  <div className="login-form">
                    <form onSubmit={this.handleSubmit}>
                      <h2>Sign In</h2>
                      <div className="login-inputs-div">
                        <div className="login-input-div">
                          <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                          {(this.props.errors.length > 0) ? <div className="inputError">Please enter a valid email.</div> : <div></div>}
                          {/* <label>Email</label> */}
                        </div>
                        <div className="login-input-div">
                          <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
                          {/* <label>Password</label> */}
                          {(this.props.errors.length > 0) ? <div className="inputError">Your password must contain between 4 and 60 characters.</div> : <div></div>}
                        </div>
                        <button type="submit">Sign In</button>
                      </div>
                    </form>
                    <div className="new-to-webflix">
                      <p className="new-to-webflix-p">New to Webflix?</p>
                      <Link to="/">Sign up now.</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <div className='links-wrapper'>
                <p>Questions? Check out these links!</p>
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
}

export default Login;