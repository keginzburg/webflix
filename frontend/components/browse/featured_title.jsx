import React from "react";
import { Redirect } from "react-router-dom";

class FeaturedTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      modal: false,
    };
    this.exitShowModal = this.exitShowModal.bind(this);
    this.openShowModal = this.openShowModal.bind(this);
    this.openPlayModal = this.openPlayModal.bind(this);
    this.addVideoToMylist = this.addVideoToMylist.bind(this);
    this.deleteVideoFromMylist = this.deleteVideoFromMylist.bind(this);
    this.likeVideo = this.likeVideo.bind(this);
    this.unlikeVideo = this.unlikeVideo.bind(this);
  }

  componentDidMount() {

  }

  exitShowModal(e) {
    this.setState({ modal: false });
  }

  openShowModal(e) {
    this.setState({ modal: true });
  }

  openPlayModal(e) {
    //this.props.location = `/browse/${this.props.video.id}`;
    this.setState({ play: true })
  }

  addVideoToMylist(e) {
    
    this.props.createMylistedVideo({ profile_id: this.props.currentProfile, video_id: this.props.featuredTitle.id })
  }

  deleteVideoFromMylist(e) {

    let mylist = this.props.mylistsArr.find(mylist => mylist['video_id'] === this.props.featuredTitle.id);

    this.props.destroyMylistedVideo(mylist.id)
  }

  likeVideo(e) {
    this.props.createLike({ profile_id: this.props.currentProfile, video_id: this.props.featuredTitle.id })
  }

  unlikeVideo(e) {
    let like = this.props.likeArr.find(like => like['video_id'] === this.props.featuredTitle.id);
    this.props.destroyLike(like.id)
  }

  render() {
    
    if (this.state.play) {
      return (
        <Redirect to={`/watch/${this.props.featuredTitle.id}`} />
      )
    } else if (this.state.modal) {
      return (
        <div className="featured-title-inner-container">
          <div className="featured-title-info-buttons">
            <h2>{this.props.featuredTitle.title}</h2>

            <h3>{this.props.featuredTitle.description}</h3>
            <div className="featured-title-buttons">
              <button className="featured-title-play-button" onClick={this.openPlayModal}><img src={window.playButton} alt="play icon" />Play</button>
              <button className="featured-title-info-button"><img width="30px" height="30px" src={window.infoButton} alt="info icon" />More Info</button>
            </div>
          </div>
          <div className="featured-background-gradient"></div>
          <img className="featured-title-background" src={this.props.featuredTitle.backgroundUrl} alt="featured movie image" />
          <div className="title-show-container">
            <div className="title-show-modal">
              <img className="movie-background" src={this.props.featuredTitle.backgroundUrl} alt="movie image" />
              <div className="background-gradient">
              </div>
              <div className="show-inner-container">
                <div className="show-exit-button-container">
                  <div className="show-exit-button">
                    <button onClick={this.exitShowModal}><img width="15px" height="15px" src={window.showExitButton} alt="exit icon" /></button>
                  </div>
                </div>
                <h2>{this.props.featuredTitle.title}</h2>
                <div className="show-buttons">
                  <button className="title-play-button" onClick={this.openPlayModal}><img src={window.playButton} alt="play icon" /><span>Play</span></button>
                  {this.props.mylistedVideos.some(id => id === this.props.featuredTitle.id) ? <button className="mylist-button" onClick={this.deleteVideoFromMylist} >
                    <img width="25px" height="25px" src={window.checkmarkButton} alt="my list icon" />
                  </button> : <button className="mylist-button" onClick={this.addVideoToMylist} >
                    <img width="25px" height="25px" src={window.mylistButton} alt="my list icon" />
                  </button>}
                  {/* like button */}
                  {this.props.likedVideos.some(id => id === this.props.featuredTitle.id) ? <button className="like-button" onClick={this.unlikeVideo} >
                    <img width="25px" height="25px" src={window.likeButtonToggled} alt="like icon" />
                  </button> : <button className="like-button" onClick={this.likeVideo} >
                    <img width="25px" height="25px" src={window.likeButton} alt="like icon" />
                  </button>}
                </div>
                <div className="show-info">
                  <div className="main-info">
                    <h3>{this.props.featuredTitle.year} <img src={window.hdIcon} alt="hd icon" /> {this.props.featuredTitle.runtime}  minutes</h3>
                    <h4>{this.props.featuredTitle.description}</h4>
                  </div>
                  <div className="genre-info">
                    <h4>Genre: <span>{this.props.featuredTitle.genre.genre}</span></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      )
    } else {
      // careful here
      
      return (
        <div className="featured-title-inner-container">
          <div className="featured-title-info-buttons">
            <h2>{this.props.featuredTitle.title}</h2>
            <h3>{this.props.featuredTitle.description}</h3>
            <div className="featured-title-buttons">
              <button className="featured-title-play-button" onClick={this.openPlayModal}><img src={window.playButton} alt="play icon" />Play</button>
              <button className="featured-title-info-button" onClick={this.openShowModal}><img width="30px" height="30px" src={window.infoButton} alt="info icon" />More Info</button>
            </div>
          </div>
          <div className="featured-background-gradient"></div>
          <img className="featured-title-background" src={window.dummyBackground} alt="featured movie image" />
        </div>
      )
    }
  }
}

export default FeaturedTitle;