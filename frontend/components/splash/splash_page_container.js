import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { receiveNewEmail, login } from "../../actions/session_actions";
import { fetchAllVideos } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  receiveNewEmail: newEmail => dispatch(receiveNewEmail(newEmail)),
  login: user => dispatch(login(user)),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
});

export default connect(null, mapDispatchToProps)(SplashPage);