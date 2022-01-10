import { connect } from "react-redux";
import Login from "./login";
import { login, clearErrors } from "../../actions/session_actions";
import { fetchAllVideos } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);