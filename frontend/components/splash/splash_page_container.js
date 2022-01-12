import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { receiveNewEmail, login, receiveFeaturedTitle } from "../../actions/session_actions";
import { fetchAllVideos } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  receiveNewEmail: newEmail => dispatch(receiveNewEmail(newEmail)),
  login: user => dispatch(login(user)),
  fetchAllVideos: () => dispatch(fetchAllVideos()),
  receiveFeaturedTitle: (featuredTitle) => dispatch(receiveFeaturedTitle(featuredTitle)),
});

export default connect(null, mapDispatchToProps)(SplashPage);