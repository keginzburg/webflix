import React from "react";
import ProfilesIndexItem from "./profiles_index_item";

class ManageProfilesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      name: "",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    }
    this.updateName = this.updateName.bind(this);
    this.addProfile = this.addProfile.bind(this);
    this.continueAdd = this.continueAdd.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfiles(this.props.currentUser);
  }

  updateName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  addProfile(e) {
    e.preventDefault();
    this.setState({ add: true });
  }

  continueAdd(e) {

    e.preventDefault();
    let newProfile = {}
    newProfile["name"] = this.state.name;
    newProfile["avatar"] = this.state.avatar;
    newProfile["user_id"] = this.props.currentUser;

    this.props.createNewUserProfile(newProfile);

    this.setState({ add: false });
  }

  cancelAdd(e) {
    e.preventDefault();
    this.setState({ add: false });
    this.setState({ name: "" });
  }

  render() {
    if (!this.state.add) {
      return (
        <ul className="manage-profiles-index-list">
          {this.props.profiles.map(profile => {
            return (
              <li className="manage-profile-index-list-item" key={profile.id}>
                <div className="manage-profile-index-item-container">
                  <ProfilesIndexItem profile={profile} />
                </div>
              </li>
            )
          })}
          <li>
            <div onClick={this.addProfile}>
              <img width="144px" height="144px" src="https://image.pngaaa.com/892/2528892-middle.png" alt="add profile icon" />
              <p>Add Profile</p>
            </div>
          </li>
        </ul>
      )
    } else if (this.state.add) {
      return (
        <div>
          <div>
            <h2>Add Profile</h2>
            <h3>Add a profile for another person watching Netflix.</h3>
          </div>
          <div>
            <img src="" alt="default image" />
            <input type="text" placeholder="Name" value={this.state.name} onChange={this.updateName} />
          </div>
          <div>
            <button onClick={this.continueAdd}>Continue</button>
            <button onClick={this.cancelAdd}>Cancel</button>
          </div>
        </div>
      )
    }
  }
}

export default ManageProfilesIndex;