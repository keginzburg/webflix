import React from "react";
import { receiveCurrentProfile } from "../../actions/session_actions";

class ManageProfilesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
  }

  render() {
    if (!this.state.edit) {
      return (
        <div className="profile-index-item-container" onClick={this.setState({ edit: true })}>
          <img width="144px" height="144px" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile icon" />
          <p>{this.props.profile.name}</p>
        </div>
      )
    } else {
      return (
        <div className="edit-profile-modal">
          <div className="edit-profile-modal-container">
            <div className="edit-profile-heading-container">
              <h2>
                Edit Profile
              </h2>
            </div>
            <div className="edit-profile-main-container">
              <img src="" alt="" />
              <input type="text" />
            </div>
            <div className="edit-profile-button-container">
              <button>Save</button>
              <button>Cancel</button>
              <button>Delete Profile</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ManageProfilesIndexItem;