import React from 'react';
import { Redirect } from 'react-router';
import SignUpHeader from './signup_header';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validEmail: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.fetchAllVideos();
    this.setState({ email: this.props.newEmail });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    // front-end email format validation
    debugger
    if (this.state.email === null) {
      let user = {
        'email': this.state.email,
        'password': this.state.password
      }
      this.props.processForm(user);
      this.props.removeNewEmail();
    } else if (this.state.email.split("@").length !== 2 || !this.state.email.split("@")[1].includes(".")) {
      debugger
      this.setState({ validEmail: false });
    } else {
      this.setState({ validEmail: true });
      let user = {
        'email': this.state.email,
        'password': this.state.password
      }
      this.props.processForm(user);
      this.props.removeNewEmail();
    }
    
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
                <div className='signup-body'>
                  <div className="signup-form">
                    <h2>Create a password to start your membership</h2>
                    <h3>Just a few more steps and you're done!</h3>
                    <h3>We hate paperwork, too.</h3>
                    <form className="signup-form-element" onSubmit={this.handleSubmit}>
                      <div className="signup-inputs">
                        {(this.props.errors.length > 0) ? 
                        <div>
                            <input className="input-error" type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                            <p>Email is required{!this.state.validEmail ? " and formatting must match 'example@mail.com'." : "!"}</p>
                            {/* {!this.state.validEmail ? "Invalid email: formatting must match 'example@mail.com'." : ""} */}
                        </div> : 
                        <div>
                            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" />
                            {!this.state.validEmail ? <p>Invalid email: formatting must match "example@mail.com".</p> : <div></div>}

                        </div>
                        }
                        {/* <label>Email</label> */}
                        {(this.props.errors.length > 0) ?
                        <div>
                          <input className="input-error" type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                          <p>Password is required!</p>
                        </div>
                         : 
                         <div>
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder='Password'/>
                         </div> }
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
                <p>Questions? Check out these links!</p>

                <ul>
                  <li>
                    <a href="https://github.com/keginzburg/webflix">GitHub</a>
                  </li>
                  <li>
                    <a href="https://angel.co/u/kyle-ginzburg">AngelList</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kyleginzburg/">LinkedIn</a>
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