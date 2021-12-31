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
          <h3>Watch anywhere. Cancel never.</h3>
          
          <form onSubmit={this.handleSubmit}>
            <h4>Ready to watch? Enter your email to create or restart your bloodpact.</h4>
            <div className="signup-email-div">
              <label>Email address
                <input type="text" value={this.state.email} onChange={this.update('email')} />
              </label>
              <button type="submit">Get Started ></button>
            </div>
          </form>
        </div>
        <div className='watch-on-tv'>
          <h2>Enjoy on your TV</h2>
          <h3>Watch on Smart TVs, Playstation, Xbox, Microwaves, Gameboys, LaserDisc players, and more.</h3>
        </div>
        <div className='download-and-watch'>
          <h2>Download your shows to watch offline.</h2>
          <h3>Save your favorites easily and never stop watching.</h3>
        </div>
        <div className='watch-everywhere'>
          <h2>Watch everywhere.</h2>
          <h3>Stream unlimited movies on your phone, tablet, laptop, and TV without paying more.</h3>
        </div>
        <div className='create-profiles'>
          <h2>Create profiles for dogs.</h2>
          <h3>Send dogs on adventures with their favorite characters in a space made just for them- free with your memebership.</h3>
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

    )
  }
}

export default SplashPage;