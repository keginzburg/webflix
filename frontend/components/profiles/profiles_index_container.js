import { connect } from "react-redux";
import ProfilesIndex from "./profiles_index";
import { createNewUserProfile } from "../../actions/profile_actions";
import { fetchMylistedVideos } from '../../actions/mylist_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  profiles: Object.values(state.entities.profiles),
})

const mapDispatchToProps = dispatch => ({
  createNewUserProfile: userId => dispatch(createNewUserProfile(userId)),
  fetchMylistedVideos: profileId => dispatch(fetchMylistedVideos(profileId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesIndex);