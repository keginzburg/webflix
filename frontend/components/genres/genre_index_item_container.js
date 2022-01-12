import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GenresIndexItem from "./genre_index_item";
import { createMylistedVideo, destroyMylistedVideo } from "../../actions/mylist_actions";

const mapStateToProps = state => {
  return {
    currentProfile: state.session.currentProfile,
    mylistedVideos: Object.values(state.entities.mylists).map(mylist => mylist["video_id"]),
    mylistsArr: Object.values(state.entities.mylists),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMylistedVideo: mylist => dispatch(createMylistedVideo(mylist)),
    destroyMylistedVideo: mylistId => dispatch(destroyMylistedVideo(mylistId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GenresIndexItem));