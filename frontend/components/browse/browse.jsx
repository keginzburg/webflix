import React from "react";
import { Redirect } from "react-router-dom";
import BrowseHeader from "./browse_header";
import ProfilesIndex from "../profiles/profiles_index";


class Browse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="browse_page">
          <BrowseHeader logout={this.props.logout} />
          <div className="profiles-modal">
            <div className="profiles-main-container">
              <h2>Who's watching?</h2>
              <ProfilesIndex />
              <div className="manage-profiles-container">
                <div className="manage-profiles-link-container">
                  {/* <Link to="/ManageProfiles">Manage Profiles</Link> */}
                </div>
              </div>
            </div>
          </div>
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