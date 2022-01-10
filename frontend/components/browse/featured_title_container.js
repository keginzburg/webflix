import { connect } from "react-redux";
import FeaturedTitle from "./featured_title";

const mapStateToProps = state => {
  return {
    featuredTitle: state.entities.videos[Math.ceil(Math.random() * Object.keys(state.entities.videos).length)]
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, null)(FeaturedTitle);