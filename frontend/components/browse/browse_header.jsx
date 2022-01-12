import React from 'react';
import Search from '../search/search';
import { Link } from 'react-router-dom';

class BrowseHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    const header = document.getElementById('browse-header-container-main');
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(20, 20, 20, 1)";
    } else if (window.scrollY < 50) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
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
          <div id="browse-header-container-main" className="browse-header-container-main">
            <div className="browse-header-inner">
              <div className='logo-category-links-container'>
                <img src={window.webflixLogoSmall} border="0" />
                <div className='links-container'>
                  <a href="https://github.com/keginzburg/webflix">Github</a>
                  <a href="#">AngelList</a>
                  <a href="https://www.linkedin.com/in/kyleginzburg/">LinkedIn</a>
                </div>
              </div>
              <div className='settings-container'>
                <div className='search-bar'>
                  <Search />
                </div>
                <div className='settings'>
                  <img src={this.props.profiles[this.props.currentProfile]['avatar']} alt="small profile icon" >
                    
                  </img>
                  <div className='dropdown-space'></div>
                  <div className='dropdown-menu'>
                    <p>Hello, {this.props.profiles[this.props.currentProfile].name}</p>
                    <Link to="/ManageProfiles" onClick={this.props.logoutCurrentProfile}>Manage Profiles</Link>
                    <p className="signout" onClick={() => { this.props.logout(); this.props.logoutCurrentUser(); this.props.clearVideos(); }}>Sign Out of Webflix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
  }
}

export default BrowseHeader;