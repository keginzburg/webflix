import { connect } from "react-redux";
import ManageProfilesIndex from "./manage_profiles_index";
import { createNewUserProfile, fetchUserProfiles } from "../../actions/profile_actions";

const mapStateToProps = state => ({
  currentUser: state.session.id,
  profiles: state.entities.profiles,
})

const mapDispatchToProps = dispatch => ({
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)), 
  createNewUserProfile: userId => dispatch(createNewUserProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageProfilesIndex);