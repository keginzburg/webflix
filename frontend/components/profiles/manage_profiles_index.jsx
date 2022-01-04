import React from "react";
import ManageProfilesIndexItem from "./manage_profile_index_item";

class ManageProfilesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      name: "",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    }
    this.updateName = this.updateName.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfiles(this.props.currentUser);
  }

  // componentDidUpdate() {
  //   this.props.fetchUserProfiles(this.props.currentUser);
  // }


  updateName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  saveProfile(e) {
    let updatedProfile = {};
    updatedProfile["id"] = this.props.editProfile;
    updatedProfile["name"] = this.state.name;
    updatedProfile["avatar"] = this.state.avatar;
    updatedProfile["user_id"] = this.props.currentUser;
    this.props.updateUserProfile(updatedProfile);
    this.props.discardEditModal();
  }

  cancelEdit(e) {
    this.props.discardEditModal();
  }

  deleteProfile(e) {
    this.props.destroyUserProfile(this.props.editProfile);
    this.props.discardEditModal();
  }

  render() {
    if (this.props.modal === 'editProfile') {
      
      return (
        <div className="edit-profile-modal">
          <div className="edit-profile-modal-container">
            <div className="edit-profile-heading-container">
              <h2>
                Edit Profile
              </h2>
            </div>
            <div className="edit-profile-main-container">
              <img src={this.state.avatar} alt="avatar icon" />
              <input type="text" value={this.state.name} placeholder="Name" onChange={this.updateName}/>
            </div>
            <div className="edit-profile-button-container">
              <button onClick={this.saveProfile}>Save</button>
              <button onClick={this.cancelEdit} >Cancel</button>
              <button onClick={this.deleteProfile} >Delete Profile</button>
            </div>
          </div>
        </div>
      )
    } else if (!this.state.add) {
      return (
        <ul className="manage-profiles-index-list">
          {this.props.profiles.map(profile => {
            return (
              <li className="manage-profile-index-list-item" key={profile.id}>
                <div className="manage-profile-index-item-container">
                  <ManageProfilesIndexItem profile={profile} updateUserProfile={this.props.updateUserProfile} receiveEditModal={this.props.receiveEditModal} receiveEditProfile = {this.props.receiveEditProfile} />
                </div>
              </li>
            )
          })}
          <li className="manage-profile-index-add-profile">
            <div onClick={this.addProfile}>
              <img className="manage-add-profile-button" width="80px" height="80px" src={window.addProfileImage} alt="add profile icon" />
              <p>Add Profile</p>
            </div>
          </li>
        </ul>
      )
    } else if (this.state.add) {
      return (
        <div className="add-profile-modal">
          <div className="add-profile-modal-container">
            <div className="add-profile-headings-container">
              <h2>Add Profile</h2>
              <h3>Add a profile for another person watching Netflix.</h3>
            </div>
            <div className="add-profiles-main-container">
              <img width="115px" height="115px" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="default image" />
              <input type="text" placeholder="Name" value={this.state.name} onChange={this.updateName} />
            </div>
            <div className="add-profiles-button-container">
              <button className="profile-continue" onClick={this.continueAdd}>Continue</button>
              <button className="profile-cancel" onClick={this.cancelAdd}>Cancel</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ManageProfilesIndex;