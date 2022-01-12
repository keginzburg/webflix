import React from "react";
import { Redirect } from "react-router-dom";
import BrowseHeader from "./browse_header";
import ProfilesIndexContainer from '../profiles/profiles_index_container';
import FeaturedTitleContainer from "./featured_title_container";
import GenresIndexContainer from "../genres/genres_index_container";
import { Link } from "react-router-dom";



class Browse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    // this.props.receiveFeaturedTitle(this.props.videos[Math.ceil(Math.random() * Object.keys(this.props.videos).length)])
  }

  componentDidUpdate() {
    // if (this.props.currentProfile) {
    //   this.props.fetchMylistedVideos(this.props.currentProfile);
    // }
    
    //this.props.receiveFeaturedTitle(this.props.videos[Math.ceil(Math.random() * Object.keys(this.props.videos).length)])
  }

  componentWillUnmount() {
    this.props.clearErrors();

  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          {
            (!this.props.currentProfile) ? <div className="browse-page">
              <BrowseHeader logout={this.props.logout} currentProfile={this.props.currentProfile} logoutCurrentUser={this.props.logoutCurrentUser} clearVideos={this.props.clearVideos} />
              <div className="profiles-modal">
                <div className="profiles-main-container">
                  <h2>Who's watching?</h2>
                  <ProfilesIndexContainer fetchUserProfiles={this.props.fetchUserProfiles} />
                  <div className="manage-profiles-container">
                    <div className="manage-profiles-link-container">
                      <Link to="/ManageProfiles">Manage Profiles</Link>
                      { this.props.errors.length > 0 ? <p className="profiles-errors" >{this.props.errors[0]}</p> : <div></div> }
                    </div>
                  </div>
                </div>
              </div>
            </div>
              :
              <div className="browse-page">
                <BrowseHeader logout={this.props.logout} currentProfile={this.props.currentProfile} profiles={this.props.profiles} logoutCurrentUser={this.props.logoutCurrentUser} logoutCurrentProfile={this.props.logoutCurrentProfile} clearVideos={this.props.clearVideos} />
                <div className="browse-main">
                  <div className="browse-main-container">
                    <div className="featured-title-container">
                      <FeaturedTitleContainer />
                    </div>
                    <div className="browse-categories-container">
                      <GenresIndexContainer />
                    </div>
                  </div>
                </div>
                <footer className="browse-footer">
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
          }
        </div>
      )
    } else {
      return (  
        <Redirect to="/" />
      )
    }
  }
}

export default Browse;