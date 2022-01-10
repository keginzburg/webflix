import React from "react";
import { connect } from "react-redux";
//import { discardWatch } from '../../actions/ui_actions';

class ShowTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.exitVideo = this.exitVideo.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  componentDidMount() {
    
  }

  exitVideo(e) {
    // this.props.discardWatch();
    this.props.history.push("/browse");
  }

  showButton(e) {
    let backButton = document.getElementById('video-back-button')
    backButton.classList.add("show");
    clearTimeout(timeout);
    let timeout = setTimeout(() => { backButton.classList.remove("show") }, 5000);
  }

  render() {
    return (
      <div className="video_container" >
        <button id="video-back-button" className="video-exit-button" onClick={this.exitVideo}>
          <img src={window.videoBackButton} alt="back arrow icon" />
        </button>
        <video className="video" src={this.props.video.trailerUrl} autoPlay controls onEnded={this.exitVideo} type="video/mp4" onMouseMove={this.showButton}>
        </video>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    video: state.entities.videos[ownProps.match.params.videoId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //discardWatch: () => dispatch(discardWatch()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTitle);

//Potential refactoring needed in regard to exiting/finishing video bringing back to still mounted Browse/Genre Index Item components.