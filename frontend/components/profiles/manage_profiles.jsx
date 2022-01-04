import React from "react";
import BrowseHeader from "../browse/browse_header";
import ManageProfilesIndexContainer from "./manage_profiles_index_container";
import { Link } from "react-router-dom";

class ManageProfiles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="manage-profiles-page">
        <BrowseHeader logout={this.props.logout} />
        <div className="manage-profiles-modal">
          <div className="manage-profiles-main-container">
            <h2>Manage Profiles:</h2>
            <ManageProfilesIndexContainer />
            <div className="manage-profiles-container">
              <div className="manage-profiles-link-container">
                <Link to="/browse">Done</Link>
              </div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}

export default ManageProfiles;