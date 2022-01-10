import { connect } from "react-redux";
import { logout, logoutCurrentUser, logoutCurrentProfile } from "../../actions/session_actions";
import { fetchUserProfiles } from "../../actions/profile_actions";
import { fetchAllVideos, clearVideos } from "../../actions/video_actions";
import { fetchMylistedVideos } from "../../actions/mylist_actions";
import Browse from "./browse";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  currentProfile: state.session.currentProfile,
  profiles: state.entities.profiles,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)),
  logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  logoutCurrentProfile: () => dispatch(logoutCurrentProfile()),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  clearVideos: () => dispatch(clearVideos()),
  fetchMylistedVideos: profileId => dispatch(fetchMylistedVideos(profileId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);