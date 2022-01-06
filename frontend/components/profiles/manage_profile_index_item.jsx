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
      return (
        <div className="profile-index-item-container" onClick={ () => {
          this.props.receiveEditModal();
          this.props.receiveEditProfile(this.props.profile.id);
          this.props.childStateHandler(this.props.profile.name, this.props.profile.avatar);
        }}>
          <img className="pencil-image" src={window.editPencilImage} alt="pencil logo" />
          <img className="icon" width="144px" height="144px" src={this.props.profile.avatar} />
          <p>{this.props.profile.name}</p>
        </div>
      )
  }
}

export default ManageProfilesIndexItem;