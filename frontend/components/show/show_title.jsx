import React from "react";
import { connect } from "react-redux";

class ShowTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state({

    });
    this.exitVideo = this.exitVideo.bind(this);
  }

  componentDidMount() {
    debugger
  }

  exitVideo(e) {
    this.props.history.goBack();
  }

  render() {
    debugger
    return (
      <div className="video_container">
        <button className="video-exit-button" onClick={this.exitVideo}>EXIT</button>
        <video className="video" src={this.props.video.trailerUrl} autoplay controls type="video/mp4">
        </video>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, null)(ShowTitle);