import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserProfiles } from "../../actions/profile_actions";
import { logoutCurrentUser, logoutCurrentProfile } from "../../actions/session_actions";
import { fetchAllVideos } from "../../actions/video_actions";
import Browse from "./browse";
import { clearVideos } from "../../actions/video_actions";

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
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);