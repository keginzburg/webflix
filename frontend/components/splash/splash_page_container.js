import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { receiveNewEmail, login } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  receiveNewEmail: newEmail => dispatch(receiveNewEmail(newEmail)),
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SplashPage);