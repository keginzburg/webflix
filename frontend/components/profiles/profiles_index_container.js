import { connect } from "react-redux";
import ProfilesIndex from "./profiles_index";
import { createNewUserProfile } from "../../actions/profile_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  profiles: state.entities.profiles,
})

const mapDispatchToProps = dispatch => ({
  createNewUserProfile: userId => dispatch(createNewUserProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesIndex);