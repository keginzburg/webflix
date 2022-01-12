import React from "react";
// import { receiveShowModal } from "../../actions/ui_actions";
// import Slider from 'react-slick';
import GenresIndexItem from "./genre_index_item";
import GenresIndexItemContainer from "./genre_index_item_container";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

class GenresIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};

  }

  componentDidMount() {
  }

  render() {
      
    return (
      // careful here, need to refactor this code so errors are not hit
      
      <div className="genres-index">
        {/* My List */}
        {this.props.mylistVideos.length === 0 ? <div></div> : <div className="genre">
          <h2>My List</h2>
            <ul className="mylist-box">
            {this.props.mylistVideos.map( (video, idx) => {
              return (
                <li key={idx} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch} />
                </li>
              )
            })}
            </ul>
        </div>}
        {/* Popular on Webflix */}
        {this.props.popularVideos ? this.props.popularVideos.length === 0 ? <div></div> : <div className="genre">
          <h2>Popular on Webflix</h2>
          <ul>
            {this.props.popularVideos.map((video, idx) => {
              return (
                <li key={idx} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch} />
                </li>
              )
            })}
          </ul>
        </div> : <div></div>}
        {/* Action */}
        <div className="genre">
          <h2>Action</h2>
          <ul>
            {this.props.actionVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch} />
                </li>
              )
            })}
          </ul>
        </div>
        {/* Comedy */}
        <div className="genre">
          <h2>Comedy</h2>
          <ul>
            {this.props.comedyVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch}  />
                </li>
              )
            })}
          </ul>
        </div>
        {/* Horror */}
        <div className="genre">
          <h2>Horror</h2>
          <ul>
            {this.props.horrorVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch} />
                </li>
              )
            })}
          </ul>
        </div>
        {/* Drama */}
        <div className="genre">
          <h2>Drama</h2>
          <ul>
            {this.props.dramaVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItemContainer video={video} modal={this.props.modal} receiveShowModal={this.props.receiveShowModal} discardShowModal={this.props.discardShowModal} play={this.props.play} receiveWatch={this.props.receiveWatch} discardWatch={this.props.discardWatch} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default GenresIndex;