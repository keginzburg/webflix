import React from "react";
import GenresIndexItem from "./genre_index_item";

class GenresIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="genres-index">
        <div className="genre">
          <h2>Action</h2>
          <ul>
            {this.props.actionVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItem video={video} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="genre">
          <h2>Comedy</h2>
          <ul>
            {this.props.comedyVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItem video={video} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="genre">
          <h2>Horror</h2>
          <ul>
            {this.props.horrorVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItem video={video} />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="genre">
          <h2>Drama</h2>
          <ul>
            {this.props.dramaVideos.map(video => {
              return (
                <li key={video.id} >
                  <GenresIndexItem video={video} />
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