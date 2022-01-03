import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUserProfiles } from "../../actions/profile_actions";
import Browse from "./browse";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUserProfiles: userId => dispatch(fetchUserProfiles(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse);