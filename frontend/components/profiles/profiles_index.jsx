import React from "react";
import ProfilesIndexItem from "./profiles_index_item";
import { fetchUserProfiles } from "../../actions/profile_actions";

class ProfilesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUserProfiles(this.props.currentUser);
  }

  render() {
    return (
      <ul className="profiles-index-list">
        {this.props.profiles.map(profile => {
          return (
            <li className="profile-index-list-item" key={profile.id}>
              <ProfilesIndexItem profile={profile} />
            </li>
          )
        })}
        <li>
          <div>
            <img width="144px" height="144px" src="https://image.pngaaa.com/892/2528892-middle.png" alt="add profile icon" />
            <p>Add Profile</p>
          </div>
        </li>
      </ul>
    )
  }
}

export default ProfilesIndex;