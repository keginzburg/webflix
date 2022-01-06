import React from 'react';

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
                <button onClick={() => { this.props.logout(); this.props.logoutCurrentUser(); this.props.clearVideos(); }}>
                  Sign Out of Netflix
                </button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="browse-header-container">
            <div className="browse-header-inner">
              <div className='logo-category-links-container'>
                <img src={window.webflixLogoSmall} border="0" />
                <div className='links-container'>
                  <a href="#">Home</a>
                  <a href="#">Popular</a>
                  <a href="#">My List</a>
                  <a href="#">Comedy</a>
                  <a href="#">Action</a>
                  <a href="#">Horror</a>
                  <a href="#">Drama</a>
                </div>
              </div>
              <div className='settings-container'>
                <div></div>
                <button onClick={this.props.logout}>
                  <img src={this.props.profiles[this.props.currentProfile]['avatar']} alt="small profile icon" >
                    
                  </img>
                  <div className='dropdown-menu'>
                    Hello
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