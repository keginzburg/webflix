import React from 'react';
import { Redirect } from 'react-router';
import LoginHeader from './login_header';
import LoginHeaderContainer from './login_header_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "newuser@gmail.com",
      newEmail: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({newUser: true})
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
              {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5c235903-02cc-4228-85a2-5fcef1e47627/ca14817e-a9cb-460a-8865-f53dc27950e4/US-en-20211227-popsignuptwoweeks-perspective_alpha_website_small.jpg" className="splash-background" alt="background image of webflix titles" /> */}
              <div className='header-tagline-container'>
                <LoginHeaderContainer />
                <div className="tagline-signup">
                  <h2>Unlimited web related movies and more.</h2>
                  <h3>Watch always. Cancel never.</h3>

                  <div className='splash-email-form'>
                    <form onSubmit={this.handleSubmit}>
                      <h4>Ready to watch? Enter your email to create or restart your bloodpact.</h4>
                      <div className="signup-email-div">
                        <label>Email address
                          <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <button type="submit">Get Started </button>
                      </div>
                    </form>
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
                  <img width="530px" height="397px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv image" />
                </div>
              </div>
              <div className='download-and-watch'>
                <div className='download-and-watch-inner'>
                  <img width="504px" height="378px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="smart phone image" />
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
                  <img width="555px" height="416px" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="multiple streaming devices" />
                </div>
              </div>
              <div className='create-profiles'>
                <div className='create-profiles-inner'>
                  <img width="504px" height="378px" src="https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
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