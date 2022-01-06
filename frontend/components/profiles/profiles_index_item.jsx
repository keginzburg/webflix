import React from "react";
import { receiveCurrentProfile } from "../../actions/session_actions";

class ProfilesIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="profile-index-item-container" onClick={() => dispatch(receiveCurrentProfile(this.props.profile.id))}>
        <img width="144px" height="144px" src={this.props.profile.avatar} alt="profile icon" />
        <p>{this.props.profile.name}</p>
      </div>
    )
  }
}

export default ProfilesIndexItem;
