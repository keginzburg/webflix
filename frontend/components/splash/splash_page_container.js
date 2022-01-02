import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { receiveNewEmail } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  receiveNewEmail: newEmail => dispatch(receiveNewEmail(newEmail)),
});

export default connect(null, mapDispatchToProps)(SplashPage);