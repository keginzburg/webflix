import React from 'react';
import { Link } from 'react-router-dom';

class BrowseHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
      if (!this.props.currentProfile) {
        return (
          <div className="browse-header-container">
            <div className="browse-header-inner">
              <img src={window.webflixLogoSmall} border="0" />
              <div>
                <button className="profile-header-signout" onClick={() => { this.props.logout(); this.props.logoutCurrentUser(); this.props.clearVideos(); }}>
                  Sign Out of Webflix
                </button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="browse-header-container-main">
            <div className="browse-header-inner">
              <div className='logo-category-links-container'>
                <img src={window.webflixLogoSmall} border="0" />
                <div className='links-container'>
                  <a href="#">Home</a>
                  <a href="#">Popular</a>
                  <a href="#">My List</a>
                  <a href="#">Action</a>
                  <a href="#">Comedy</a>
                  <a href="#">Horror</a>
                  <a href="#">Drama</a>
                </div>
              </div>
              <div className='settings-container'>
                <div></div>
                <button >
                  <img src={this.props.profiles[this.props.currentProfile]['avatar']} alt="small profile icon" >
                    
                  </img>
                  <div className='dropdown-menu'>
                    <p>Hello, {this.props.profiles[this.props.currentProfile].name}</p>
                    <Link to="/ManageProfiles" onClick={this.props.logoutCurrentProfile}>Manage Profiles</Link>
                    <button onClick={() => { this.props.logout(); this.props.logoutCurrentUser(); this.props.clearVideos(); }}>Sign Out of Webflix</button>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )
      }
  }
}

export default BrowseHeader;