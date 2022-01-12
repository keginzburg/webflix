import { connect } from "react-redux";
import FeaturedTitle from "./featured_title";
import { createMylistedVideo, destroyMylistedVideo } from "../../actions/mylist_actions";

const mapStateToProps = state => {
  return {
    // featuredTitle: state.entities.videos[Math.ceil(Math.random() * Object.keys(state.entities.videos).length)],
    featuredTitle: state.session.featuredTitle,
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedTitle);