import React from "react";
import ManageProfilesIndexItem from "./manage_profile_index_item";

class ManageProfilesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      name: "",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
      selectedName: "",
      selectedAvatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    }
    this.childStateHandler = this.childStateHandler.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.addProfile = this.addProfile.bind(this);
    this.continueAdd = this.continueAdd.bind(this);
    this.cancelAdd = this.cancelAdd.bind(this);
    this.addChildToState = this.addChildToState.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserProfiles(this.props.currentUser);
  }

  // componentDidUpdate() {
  //   this.props.fetchUserProfiles(this.props.currentUser);
  // }

  childStateHandler(childName, childAvatar) {
    this.setState({
      selectedName: childName,
      selectedAvatar: childAvatar,
    })
  }


  updateName(e) {
    this.setState({ name: e.currentTarget.value });
  }

  updateAvatar(e) {
    this.setState({ avatar: e.currentTarget.value });
    this.setState({ selectedAvatar: e.currentTarget.value });
    this.props.discardIconModal();
    this.props.receiveEditModal();
  }

  saveProfile(e) {
    let updatedProfile = {};
    updatedProfile["id"] = this.props.editProfile;
    updatedProfile["name"] = this.state.name;
    updatedProfile["avatar"] = this.state.avatar;
    updatedProfile["user_id"] = this.props.currentUser;
    this.props.updateUserProfile(updatedProfile);
    this.props.discardEditModal();
    this.setState({ name: "" });
    this.setState({ avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" });
  }

  cancelEdit(e) {
    this.props.discardEditModal();
  }

  deleteProfile(e) {
    this.props.destroyUserProfile(this.props.editProfile);
    this.props.discardEditModal();
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

    setTimeout(() => {
      this.setState({ add: false });
    }, 1000);
  }

  cancelAdd(e) {
    e.preventDefault();
    this.setState({ add: false });
    this.setState({ name: "" });
  }

  addChildToState(name, avatar) {
    this.setState({ name: name });
    this.setState({ avatar: avatar });
  }

  render() {
    if (this.props.modal === 'editProfileIcon') {
      return (
        <div className="icon-modal">
          <div className="icon-modal-container">
            <div className="headings-profile-icon-container">
              <div className="headings-container">
                <div className="return-button">
                  <img src="https://img.icons8.com/ios-filled/90/000000/long-arrow-left.png" />
                </div>
                <div className="headings">
                  <h2>Edit Profile</h2>
                  <h3>Choose a profile icon.</h3>
                </div>
              </div>
              <div className="profile-icon-container">
                <h4>Current Icon: </h4>
                <img src={this.state.avatar} alt="current icon" />
              </div>
            </div>
            <div className="icon-choices-container">
              <h2>The Classics</h2>
              <div className="icon-choices">
                
                <button onClick={this.updateAvatar} value="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="default icon" /></button>

                <button onClick={this.updateAvatar} value="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png"><img src="https://i.pinimg.com/originals/10/12/c0/1012c06c7e1b0f8f5e60611992785e5a.png" alt="spy icon" /></button>

                <button onClick={this.updateAvatar} value="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png" alt="penguin icon" /></button>

                <button onClick={this.updateAvatar} value="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png" alt="pirate icon" /></button>

                <button onClick={this.updateAvatar} value="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="chicken icon" /></button>

                <button onClick={this.updateAvatar} value="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png" alt="alien icon" /></button>

                <button onClick={this.updateAvatar} value="https://noirflix.netlify.app/imgs/icon1.png"><img src="https://noirflix.netlify.app/imgs/icon1.png" alt="superhero icon" /></button>

                <button onClick={this.updateAvatar} value="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png" alt="panda icon" /></button>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.props.modal === 'editProfile') {
      
      return (
        <div className="edit-profile-modal">
          <div className="edit-profile-modal-container">
            <div className="edit-profile-heading-container">
              <h2>
                Edit Profile
              </h2>
            </div>
            <div className="edit-profile-main-container">
              <div className="pencil-circle">
              </div>
              <img onClick={() => {this.props.receiveIconModal()} } className="pencil" img src={window.editPencilImage} alt="pencil button" />
              <img className="icon" src={this.state.avatar} alt="avatar icon" />
              <input type="text" value={this.state.name} placeholder={this.state.selectedName} onChange={this.updateName}/>
            </div>
            <div className="edit-profile-button-container">
              <button className="edit-profile-save" onClick={this.saveProfile}>Save</button>
              <button className="edit-profile-cancel" onClick={this.cancelEdit} >Cancel</button>
              <button className="edit-profile-cancel" onClick={this.deleteProfile} >Delete Profile</button>
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
                  <ManageProfilesIndexItem profile={profile} updateUserProfile={this.props.updateUserProfile} receiveEditModal={this.props.receiveEditModal} receiveEditProfile = {this.props.receiveEditProfile} addChildToState={this.addChildToState}/>
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