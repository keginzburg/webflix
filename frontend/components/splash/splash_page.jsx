import React from 'react';
import { Redirect } from 'react-router';
import { fetchAllVideos } from '../../actions/video_actions';
import LoginHeader from './login_header';
import LoginHeaderContainer from './login_header_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      newEmail: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveNewEmail(this.state.email);
    this.setState({ newUser: true })
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.fetchAllVideos();
    this.props.login({ email: "demouser@gmail.com", password: "demouser" })
  }

  render() {
    if (this.state.newUser) {

      return (
        <Redirect to={{
          pathname: '/signup'
          // state: { newEmail: this.state.email },
        }} />
      )
    } else {

      return (
        <div className='splash-background'>
          <div className='splash-container'>
            <div className='main-splash-container'>

              <div className='header-tagline-container'>
                <LoginHeaderContainer />
                <div className="tagline-signup">
                  <h2>Unlimited web related movies and more.</h2>
                  <h3>Watch always. Cancel never.</h3>

                  <div className='splash-email-form'>
                    <form onSubmit={this.handleSubmit}>
                      <h4>Ready to watch? Enter your email to create or restart your bloodpact.</h4>
                      <div className="signup-email-div">
                        <div>
                          <input type="text" value={this.state.email} onChange={this.update('email')} placeholder='Email address' />
                          {/* <label>Email address</label> */}
                          <button type="submit">Get Started <img width="35px" height="35px" src={window.chevronURL} alt="chevron right" /></button>
                        </div>
                      </div>
                    </form>
                    <button onClick={this.handleDemo} className='demo_user_button'>Demo User</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='webflix-story'>
              <div className='watch-on-tv'>
                <div className='watch-on-tv-inner'>
                  <div>
                    <h2>Enjoy on your TV.</h2>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Microwaves, Gameboys, LaserDisc players, and more.</h3>
                  </div>
                  <img width="530px" height="397px" src={window.watchOnTvImage} alt="tv image" />
                </div>
              </div>
              <div className='download-and-watch'>
                <div className='download-and-watch-inner'>
                  <img width="504px" height="378px" src={window.downloadAndWatchImage} alt="smart phone image" />
                  <div>
                    <h2>Download your shows to watch offline.</h2>
                    <h3>Save your favorites easily and never stop watching.</h3>
                  </div>
                </div>
              </div>
              <div className='watch-everywhere'>
                <div className='watch-everywhere-inner'>
                  <div>
                    <h2>Watch everywhere.</h2>
                    <h3>Stream unlimited movies on your phone, tablet, laptop, and TV without paying more.</h3>
                  </div>
                  <img width="555px" height="416px" src={window.watchEverywhereImage} alt="multiple streaming devices" />
                </div>
              </div>
              <div className='create-profiles'>
                <div className='create-profiles-inner'>
                  <img width="504px" height="378px" src={window.createProfilesImage} alt="" />
                  <div>
                    <h2>Create profiles for dogs (or kids).</h2>
                    <h3>Send dogs (or kids) on adventures with their favorite characters in a space made just for them- free with your memebership.</h3>
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

export default SplashPage;