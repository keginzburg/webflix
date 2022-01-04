import React from "react";
import { receiveCurrentProfile } from "../../actions/session_actions";

class ProfilesIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="profile-index-item-container" onClick={() => dispatch(receiveCurrentProfile(this.props.profile.id))}>
        <img width="144px" height="144px" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile icon" />
        <p>{this.props.profile.name}</p>
      </div>
    )
  }
}

export default ProfilesIndexItem;
