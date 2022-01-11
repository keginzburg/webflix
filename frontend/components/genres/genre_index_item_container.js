import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GenresIndexItem from "./genre_index_item";
import { createMylistedVideo, destroyMylistedVideo } from "../../actions/mylist_actions";
import { createLike, destroyLike } from "../../actions/like_actions";

const mapStateToProps = state => {
  return {
    currentProfile: state.session.currentProfile,
    mylistedVideos: Object.values(state.entities.mylists).map(mylist => mylist["video_id"]),
    mylistsArr: Object.values(state.entities.mylists),
    likedVideos: Object.values(state.entities.likes).map(like => like["video_id"]),
    likeArr: Object.values(state.entities.likes),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMylistedVideo: mylist => dispatch(createMylistedVideo(mylist)),
    destroyMylistedVideo: mylistId => dispatch(destroyMylistedVideo(mylistId)),
    createLike: like => dispatch(createLike(like)),
    destroyLike: likeId => dispatch(destroyLike(likeId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GenresIndexItem));