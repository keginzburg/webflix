import { connect } from "react-redux";
import { logout, logoutCurrentUser, logoutCurrentProfile, receiveFeaturedTitle,clearErrors } from "../../actions/session_actions";
import { fetchUserProfiles } from "../../actions/profile_actions";
import { fetchAllVideos, clearVideos } from "../../actions/video_actions";
import { fetchMylistedVideos } from "../../actions/mylist_actions";
import Browse from "./browse";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  currentProfile: state.session.currentProfile,
  profiles: state.entities.profiles,
  videos: state.entities.videos,
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)),
  logoutCurrentUser: () => dispatch(logoutCurrentUser()),
  logoutCurrentProfile: () => dispatch(logoutCurrentProfile()),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  receiveFeaturedTitle: featuredTitle => dispatch(receiveFeaturedTitle(featuredTitle)),
  clearVideos: () => dispatch(clearVideos()),
  clearErrors: () => dispatch(clearErrors()),
  fetchMylistedVideos: profileId => dispatch(fetchMylistedVideos(profileId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);