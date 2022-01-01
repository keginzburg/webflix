import { connect } from "react-redux";
import Login from "./login";
import { login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);