import React from "react";

class GenresIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="genre-index-item-container">
        {this.props.video.title}
      </div>
    )
  }
}

export default GenresIndexItem