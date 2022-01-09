import { connect } from "react-redux";
import GenresIndex from "./genres_index";
import * as Selectors from "../../reducers/selectors";

const mapStateToProps = (state) => {
  return {
    actionVideos: Selectors.filterActionVideos(state),
    horrorVideos: Selectors.filterHorrorVideos(state),
    comedyVideos: Selectors.filterComedyVideos(state),
    dramaVideos: Selectors.filterDramaVideos(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, null)(GenresIndex);