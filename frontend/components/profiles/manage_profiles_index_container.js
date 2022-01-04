import { connect } from "react-redux";
import ManageProfilesIndex from "./manage_profiles_index";
import { createNewUserProfile, fetchUserProfiles, updateUserProfile, destroyUserProfile } from "../../actions/profile_actions";
import { receiveEditModal, discardEditModal } from "../../actions/ui_actions";
import { receiveEditProfile, discardEditProfile } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.session.id,
  profiles: Object.values(state.entities.profiles),
  editProfile: state.session.editProfile,
  modal: state.ui.modal,
})

const mapDispatchToProps = dispatch => ({
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)), 
  createNewUserProfile: userId => dispatch(createNewUserProfile(userId)),
  updateUserProfile: updatedProfile => dispatch(updateUserProfile(updatedProfile)),
  destroyUserProfile: profileId => dispatch(destroyUserProfile(profileId)),
  receiveEditModal: () => dispatch(receiveEditModal()),
  discardEditModal: () => dispatch(discardEditModal()),
  receiveEditProfile: (profileId) => dispatch(receiveEditProfile(profileId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilesIndex);