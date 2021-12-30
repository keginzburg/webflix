import React from 'react';
import { Redirect } from 'react-router';
import LoginHeader from './login_header';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    <Redirect to="/signup" email={this.state.email} />
  }

  render() {
    return (
      <div className='splash-container'>
        <LoginHeader />
        <div className="tagline-signup">
          <h2>Unlimited web related movies and more.</h2>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
          <form onSubmit={this.handleSubmit}>
            <label>Email address
              <input type="text" value={this.state.email} onChange={this.update('email')} />
              <button type="submit">Get Started ></button>
            </label>

          </form>
        </div>
        <div>
          
        </div>
        <footer>
          <p>Questions? Call 305-962-6631</p>

          <a href="https://github.com/keginzburg/webflix">GitHub</a>
          <a href="#">My AngelList</a>
          <a href="https://www.linkedin.com/in/kyleginzburg/">My LinkedIn</a>
        </footer>
      </div>

    )
  }
}

export default SplashPage;