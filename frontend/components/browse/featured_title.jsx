import React from "react";

class FeaturedTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      modal: false,
    };
  }

  componentDidMount() {

  }

  render() {
    
    if (this.state.play) {
      render (
        <div>

        </div>
      )
    } else if (this.state.modal) {
      render (

      )
    } else {
      debugger
      return (
        <div className="featured-title-inner-container">
          <div>
            <h3>{this.props.featuredTitle.description}</h3>
            <div className="featured-title-buttons">
              <button className="featured-title-play-button"><img src={window.playButton} alt="play icon" />Play</button>
              <button className="featured-title-info-button"><img width="30px" height="30px" src={window.infoButton} alt="info icon" />More Info</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default FeaturedTitle;