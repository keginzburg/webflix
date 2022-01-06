import React from "react";

class FeaturedTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    debugger
    return (
      <div className="featured-title-inner-container">
        {this.props.featuredTitle.title}
      </div>
    )
  }
}

export default FeaturedTitle;