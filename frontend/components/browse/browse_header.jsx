import React from 'react';

class BrowseHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log("browse header has mounting")
  }

  render() {
    return (
      <div className="browse-header-container">
        <div className="browse-header-inner">
          <img src="https://fontmeme.com/permalink/211231/59e1689bbdeb149518599fd21c6562ab.png" alt="netflix-font" border="0" />
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default BrowseHeader;