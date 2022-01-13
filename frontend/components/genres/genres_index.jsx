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
    this.state = {
      xOffset: 0,
      yOffset: 0,
      scrollDistance: 220,
      rightScrollCount: 0,
      leftScrollCount: 0,
    };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
  }

  scrollLeft(e) {
    let mylist = document.getElementById("mylist-row");
    if (this.state.leftScrollCount <= 0) {
      return;
    } else {
      this.setState({ xOffset: this.state.xOffset += this.state.scrollDistance })
      this.setState({ leftScrollCount: this.state.leftScrollCount - 1 })
      this.setState({ rightScrollCount: this.state.rightScrollCount - 1})
    }
  }

  scrollRight(e) {
    let mylist = document.getElementById("mylist-row");
    if (this.state.rightScrollCount >= mylist.childElementCount-6) {
      return;
    } else {
      this.setState({ xOffset: this.state.xOffset -= this.state.scrollDistance })
      this.setState({ rightScrollCount: this.state.rightScrollCount + 1 })
      this.setState({ leftScrollCount: this.state.leftScrollCount + 1 })
    }    
  }

  render() {
    let style = {
      position: "relative",
      left: `${this.state.xOffset}px`,
    }
    return (
      // careful here, need to refactor this code so errors are not hit
      
      <div className="genres-index">
        {/* My List */}
        {this.props.mylistVideos.length === 0 ? <div></div> : <div className="genre">
          <h2>My List</h2>
          <div className="my-list-header-and-buttons">
            {/* { this.props.mylistVideos.length < 7 ? <div></div> : <button className="left-scroll-button" onClick={this.scrollLeft}><img src={window.scrollChevronLeft} alt="left scroll" /></button>}
            { this.props.mylistVideos.length < 7 ? <div></div> : <button className="right-scroll-button" onClick={this.scrollRight}><img src={window.scrollChevronRight} alt="right scroll" /></button>} */}
            <button className="left-scroll-button" onClick={this.scrollLeft}><img src={window.scrollChevronLeft} alt="left scroll" /></button>
            <button className="right-scroll-button" onClick={this.scrollRight}><img src={window.scrollChevronRight} alt="right scroll" /></button>
          </div>
          <ul style={style} id="mylist-row">
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
          <h2 className="popular-heading">Popular on Webflix</h2>
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