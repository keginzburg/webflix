import React from 'react';
import { Redirect } from 'react-router';
//import LoginHeader from '../splash/login_header';
//import LoginHeaderContainer from '../splash/login_header_container';
import SignUpHeader from './signup_header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
      if (!this.props.location.state.newEmail) {
        
        return;
      } else {
        this.setState({ email: this.props.location.state.newEmail })
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
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
        <div className='signup-background'>
          <div className='signup-container'>
            <div className='main-signup-container'>
              <div className='main-signup-container-inner'>
                <SignUpHeader />
                <div className='plan-signup-container'>
                  <div className="plan-signup">
                    <h2>Create a password to start your membership</h2>
                    <h3>Just a few more steps and you're done!</h3>
                    <h3>We hate paperwork, too.</h3>
                    <form onSubmit={this.handleSubmit}>
                      <div className="signup-email-div">
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email' />
                        {/* <label>Email</label> */}
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                        {/* <label>Add a password</label> */}
                        <button type="submit">Start Membership</button>
                      </div>
                    </form>
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
}

export default SignUp;