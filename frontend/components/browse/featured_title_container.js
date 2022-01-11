import { connect } from "react-redux";
import FeaturedTitle from "./featured_title";
import { createMylistedVideo, destroyMylistedVideo } from "../../actions/mylist_actions";
import { createLike, destroyLike } from "../../actions/like_actions";

const mapStateToProps = state => {
  return {
    // featuredTitle: state.entities.videos[Math.ceil(Math.random() * Object.keys(state.entities.videos).length)],
    featuredTitle: state.session.featuredTitle,
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTitle);