import { connect } from "react-redux";
import GenresIndex from "./genres_index";
import * as Selectors from "../../reducers/selectors";
import { receiveShowModal, discardShowModal, receiveWatch, discardWatch } from "../../actions/ui_actions";

const mapStateToProps = (state) => {
  return {
    mylistVideos: Selectors.filterMylistVideos(state),
    actionVideos: Selectors.filterActionVideos(state),
    horrorVideos: Selectors.filterHorrorVideos(state),
    comedyVideos: Selectors.filterComedyVideos(state),
    dramaVideos: Selectors.filterDramaVideos(state),
    modal: state.ui.modal,
    play: state.ui.play,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveShowModal: () => {dispatch(receiveShowModal())},
    discardShowModal: () => {dispatch(discardShowModal())},
    receiveWatch: () => {dispatch(receiveWatch())},
    discardWatch: () => {dispatch(discardWatch())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresIndex);