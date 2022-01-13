import React from "react";
import { createRef } from "react";
import { Redirect } from "react-router-dom";

class GenresIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false,
      modal: false,
      mylistId: undefined,
    }
    this.exitShowModal = this.exitShowModal.bind(this);
    this.openShowModal = this.openShowModal.bind(this);
    this.openPlayModal = this.openPlayModal.bind(this);
    this.addVideoToMylist = this.addVideoToMylist.bind(this);
    this.deleteVideoFromMylist = this.deleteVideoFromMylist.bind(this);
    this.likeVideo = this.likeVideo.bind(this);
    this.unlikeVideo = this.unlikeVideo.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    // this.wrapperRef = React.createRef();
    // this.wrapperRef2 = React.createRef();
    
  }

  // componentDidUpdate() {
  //   if (this.state.modal) {
  //     document.getElementById('show-modal-shade').addEventListener('click', this.handleOutsideClick);
  //   }
  // }

  // handleOutsideClick(e) {
  //   if (!this.wrapperRef.current.contains(e.currentTarget)) {
  //     this.exitShowModal();
  //   }
  // }

  exitShowModal(e) {
    this.setState({ modal: false });
    // this.props.discardShowModal();
  }

  openShowModal(e) {
    this.setState({ modal: true })
    // this.props.receiveShowModal();
  }

  openPlayModal(e) {
    this.setState({ play: true })
    // this.props.receiveWatch();
  }

  addVideoToMylist(e) {
    this.props.createMylistedVideo({profile_id: this.props.currentProfile, video_id: this.props.video.id })    
  }

  deleteVideoFromMylist(e) {
    
    let mylist = this.props.mylistsArr.find(mylist => mylist['video_id'] === this.props.video.id);
    
    this.props.destroyMylistedVideo(mylist.id)
  }

  likeVideo(e) {
    this.props.createLike({profile_id: this.props.currentProfile, video_id: this.props.video.id })
    //this.props.fetchAllVideos();
  }

  unlikeVideo(e) {
    let like = this.props.likeArr.find(like => like['video_id'] === this.props.video.id && like['profile_id'] === this.props.currentProfile);
    this.props.destroyLike(like.id);
    //this.props.fetchAllVideos();
  }

  render() {
    if (this.state.play) {
      return (
        <Redirect to={`/watch/${this.props.video.id}`} />
      )
    } else if (!this.state.modal) {
      
    return (
      //Genre Index Item Thumbnail and Hover Modal
      // careful here, another error because video is undefined
      <div className="genre-index-item-container">
        <div className="genre-index-item-thumbnail">
          <img src={this.props.video.thumbnailUrl} alt="movie thumbnail" />
          {/* <img src={window.dummyThumbnail} alt="" /> */}
        </div>
        <div className="genre-index-item-modal">
          <div className="genre-index-item-modal-buttons">
            <div className="main-buttons">
              {/* play button */}
              <button className="title-play-button" onClick={this.openPlayModal} >
                <img width="25px" height="25px" src={window.playButton} alt="play icon" />
              </button>
              {/* mylist button */}
              {this.props.mylistedVideos.some(id => id === this.props.video.id ) ? <button className="mylist-button" onClick={this.deleteVideoFromMylist} >
                <img width="25px" height="25px" src={window.checkmarkButton} alt="my list icon" /><div className="mylist-button-info-remove">Remove from My List</div>
              </button> : <button className="mylist-button" onClick={this.addVideoToMylist} >
                <img width="25px" height="25px" src={window.mylistButton} alt="my list icon" />
                <div className="mylist-button-info">Add to My List</div>
              </button>}
              {/* like button */}
              {this.props.likedVideos.some(id => id === this.props.video.id) ? <button className="like-button" onClick={this.unlikeVideo} >
                <img width="25px" height="25px" src={window.likeButtonToggled} alt="like icon" />
                <div className="like-button-info-remove">Not for me</div>
              </button> : <button className="like-button" onClick={this.likeVideo} >
                <img width="25px" height="25px" src={window.likeButton} alt="like icon" />
                <div className="like-button-info">I like this</div>
              </button>}
            </div>
            <div className="show-button-div">
              {/* show button */}
              <button className="show-button" onClick={this.openShowModal} >
                <img width="25px" height="25px" src={window.chevronDown} alt="show icon" />
                <div className="show-button-info">More info</div>
              </button>
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
      //Genre Index Item Show Modal
      <div className="genre-index-item-container">
          <div className="title-show-container" id="show-modal-shade">
            <div className="title-show-modal" id="show-modal">
              <img className="movie-background" src={this.props.video.backgroundUrl} alt="movie image" />
              <div className="background-gradient"></div>
              <div className="show-inner-container">
                <div className="show-exit-button-container">
                  <div className="show-exit-button">
                    <button onClick={this.exitShowModal}>
                      <img width="15px" height="15px" src={window.showExitButton} alt="exit icon" />
                    </button>
                  </div>
                </div>
                <h2>{this.props.video.title}</h2>
                <div className="show-buttons">
                  <button className="title-play-button" onClick={this.openPlayModal}>
                    <img src={window.playButton} alt="play icon" />
                    <span>Play</span>
                  </button>
                  {this.props.mylistedVideos.some(id => id === this.props.video.id) ? <button className="mylist-button" onClick={this.deleteVideoFromMylist} >
                    <img width="25px" height="25px" src={window.checkmarkButton} alt="my list icon" />
                  </button> : <button className="mylist-button" onClick={this.addVideoToMylist} >
                    <img width="25px" height="25px" src={window.mylistButton} alt="my list icon" />
                  </button>}
                  {/* like button */}
                  {this.props.likedVideos.some(id => id === this.props.video.id) ? <button className="like-button" onClick={this.unlikeVideo} >
                    <img width="25px" height="25px" src={window.likeButtonToggled} alt="like icon" />
                  </button> : <button className="like-button" onClick={this.likeVideo} >
                    <img width="25px" height="25px" src={window.likeButton} alt="like icon" />
                  </button>}
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
        <div className="genre-index-item-thumbnail">
          <img src={this.props.video.thumbnailUrl} alt="movie thumbnail" />
        </div>
        {/* Genre Index Item Show Modal */}
        <div className="genre-index-item-modal">
          <div className="genre-index-item-modal-buttons">
            <div className="main-buttons">
              <button className="title-play-button" onClick={this.openPlayModal} >
                <img width="25px" height="25px" src={window.playButton} alt="play icon" />
              </button>
                {this.props.mylistedVideos.some(id => id === this.props.video.id) ? <button className="mylist-button" onClick={this.deleteVideoFromMylist} >
                  <img width="25px" height="25px" src={window.checkmarkButton} alt="my list icon" />
                </button> : <button className="mylist-button" onClick={this.addVideoToMylist} >
                  <img width="25px" height="25px" src={window.mylistButton} alt="my list icon" />
                </button>}
                {/* like button */}
                {this.props.likedVideos.some(id => id === this.props.video.id) ? <button className="like-button" onClick={this.unlikeVideo} >
                  <img width="25px" height="25px" src={window.likeButtonToggled} alt="like icon" />
                </button> : <button className="like-button" onClick={this.likeVideo} >
                  <img width="25px" height="25px" src={window.likeButton} alt="like icon" />
                </button>}
            </div>
            <div className="show-button-div">
              <button className="show-button" onClick={this.openShowModal} >
                <img width="25px" height="25px" src={window.chevronDown} alt="show icon" />
              </button>
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
    }
  }
}

export default GenresIndexItem

//Potential refactoring needed in changing modal and play from internal state to redux state.


// Discarded Unlike Button
{/* unlike button */ }
{/* <button className="dislike-button" onClick={this.unlikeVideo} >
    <img width="25px" height="25px" src={window.dislikeButton} alt="dislike icon" />
</button> */}
