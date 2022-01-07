import React from "react";

class GenresIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      modal: false,
    }
    this.exitShowModal = this.exitShowModal.bind(this);
    this.openShowModal = this.openShowModal.bind(this);
  }

  componentDidMount() {
    
  }

  exitShowModal(e) {
    this.setState({ modal: false });
  }

  openShowModal(e) {
    this.setState({ modal: true })
  }

  render() {
    if (!this.state.modal) {
    return (
      <div className="genre-index-item-container">
        <div className="genre-index-item-thumbnail">
          <img src={this.props.video.thumbnailUrl} alt="movie thumbnail" />
        </div>
        <div className="genre-index-item-modal">
          <div className="genre-index-item-modal-buttons">
            <div className="main-buttons">
              <button className="title-play-button"><img width="25px" height="25px" src={window.playButton} alt="play icon" /></button>
              <button className="mylist-button"><img width="25px" height="25px" src={window.mylistButton} alt="my list icon" /></button>
              <button className="like-button"><img width="25px" height="25px" src={window.likeButton} alt="like icon" /></button>
              <button className="dislike-button"><img width="25px" height="25px" src={window.dislikeButton} alt="dislike icon" /></button>
            </div>
            <div className="show-button-div">
              <button className="show-button" onClick={this.openShowModal} ><img width="25px" height="25px" src={window.chevronDown} alt="show icon" /></button>
            </div>
          </div>
          <div className="genre-index-item-modal-info">
            <h3>{this.props.video.year} <img src={window.hdIcon} alt="hd icon" /> {this.props.video.runtime} minutes</h3>
          </div>
          <div className="genre-index-item-modal-genre">
            <h3>{this.props.video.genre.genre}</h3>
          </div>
        </div>
      </div>
    )
    } else if (this.state.modal) {
      return (
          <div className="title-show-container">
            <div className="title-show-modal">
              <img className="movie-background" src={window.dummyBackground} alt="movie image" />
              <div className="background-gradient">
              </div>
              <div className="show-inner-container">
                <div className="show-exit-button-container">
                  <div className="show-exit-button">
                    <button onClick={this.exitShowModal}><img width="15px" height="15px" src={window.showExitButton} alt="exit icon" /></button>
                  </div>
                </div>
                <h2>{this.props.video.title}</h2>
                <div className="show-buttons">
                  <button className="title-play-button"><img src={window.playButton} alt="play icon" /><span>Play</span></button>
                  <button className="mylist-button"><img width="25px" height="25px" src={window.mylistButton} alt="my list icon" /></button>
                  <button className="like-button"><img width="25px" height="25px" src={window.likeButton} alt="like icon" /></button>
                  <button className="dislike-button"><img width="25px" height="25px" src={window.dislikeButton} alt="dislike icon" /></button>
                </div>
                <div className="show-info">
                  <div className="main-info">
                    <h3>{this.props.video.year} <img src={window.hdIcon} alt="hd icon" /> {this.props.video.runtime}  minutes</h3>
                    <h4>{this.props.video.description}</h4>
                  </div>
                  <div className="genre-info">
                    <h4>Genre: <span>{this.props.video.genre.genre}</span></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

      )
    }
  }
}

export default GenresIndexItem