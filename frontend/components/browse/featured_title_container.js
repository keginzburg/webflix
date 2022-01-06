import { connect } from "react-redux";
import FeaturedTitle from "./featured_title";

const mapStateToProps = state => {
  return {
    featuredTitle: state.entities.videos[Math.floor(Math.random() * Object.keys(state.entities.videos).length-1)]
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, null)(FeaturedTitle);