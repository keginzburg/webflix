import React from "react";
import ProfilesIndexItem from "./profiles_index_item";

class ProfilesIndex extends React.Component {
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
    this.setState({ add: true});
  }

  continueAdd(e) {
    
    e.preventDefault();
    let newProfile = {}
    newProfile["name"] = this.state.name;
    newProfile["avatar"] = this.state.avatar;
    newProfile["user_id"] = this.props.currentUser;
    
    this.props.createNewUserProfile(newProfile);
    
    setTimeout(()=>{
      this.setState({ add: false });
    }, 1000);
  }

  cancelAdd(e) {
    e.preventDefault();
    this.setState({ add: false });
    this.setState({ name: "" });
  }

  render() {
    if (!this.state.add) {
      return (
        <ul className="profiles-index-list">
          {this.props.profiles.map(profile => {
            return (
              <li className="profile-index-list-item" key={profile.id}>
                <ProfilesIndexItem profile={profile} fetchMylistedVideos={this.props.fetchMylistedVideos} fetchLikes={this.props.fetchLikes} />
              </li>
            )
          })}
          <li> 
            <div className="profile-index-add-profile" onClick={this.addProfile}>
              <img className="add-profile-button" width="80px" height="80px" margin="34.5px" src={window.addProfileImage} alt="add profile icon" />
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

export default ProfilesIndex;