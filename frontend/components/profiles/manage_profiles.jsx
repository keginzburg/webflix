import React from "react";
import BrowseHeader from "../browse/browse_header";
import ManageProfilesIndexContainer from "./manage_profiles_index_container";
import { logout, logoutCurrentUser } from "../../actions/session_actions";
import { clearVideos } from "../../actions/video_actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <BrowseHeader logout={this.props.logout} logoutCurrentUser={this.props.logoutCurrentUser} clearVideos={this.props.clearVideos} />
        <div className="manage-profiles-modal">
          <div className="manage-profiles-main-container">
            <h2>Manage Profiles:</h2>
            <ManageProfilesIndexContainer />
            <div className="manage-profiles-container">
              <div className="manage-profiles-link-container">
                <Link className="" to="/browse">Done</Link>
              </div>
            </div>
          </div>
        </div>
      </div>      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    logoutCurrentUser: () => dispatch(logoutCurrentUser()),
    clearVideos: () => dispatch(clearVideos()),
  }
}

export default connect(null, mapDispatchToProps)(ManageProfiles);