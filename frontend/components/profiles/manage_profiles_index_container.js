import { connect } from "react-redux";
import ManageProfilesIndex from "./manage_profiles_index";
import { createNewUserProfile, fetchUserProfiles, updateUserProfile } from "../../actions/profile_actions";

const mapStateToProps = state => ({
  currentUser: state.session.id,
  profiles: state.entities.profiles,
})

const mapDispatchToProps = dispatch => ({
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)), 
  createNewUserProfile: userId => dispatch(createNewUserProfile(userId)),
  updateUserProfile: updatedProfile => dispatch(updateUserProfile(updatedProfile)),

})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilesIndex);