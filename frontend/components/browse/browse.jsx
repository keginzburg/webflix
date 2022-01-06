import React from "react";
import { Redirect } from "react-router-dom";
import BrowseHeader from "./browse_header";
import ProfilesIndexContainer from '../profiles/profiles_index_container';
import GenresIndexContainer from "../genres/genres_index_container";
import { Link } from "react-router-dom";



class Browse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
              :
              <div className="browse-page">
                <BrowseHeader logout={this.props.logout} currentProfile={this.props.currentProfile} profiles={this.props.profiles} />
                <div className="browse-main">
                  <div className="browse-main-container">
                    <div className="featured-title-container">
                      Pardon our dust, a featured title component will go here eventually.
                    </div>
                    <div className="browse-categories-container">
                      <GenresIndexContainer />
                    </div>
                  </div>
                </div>
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