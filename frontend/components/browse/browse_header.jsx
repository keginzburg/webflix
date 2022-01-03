import React from 'react';

class BrowseHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="browse-header-container">
        <div className="browse-header-inner">
          <img src="https://fontmeme.com/permalink/220103/f620b2b6fd3201eccfe749a9f645225d.png" alt="webflix-logo-small" border="0" />
          <button onClick={this.props.logout}>Sign out of Webflix</button>
        </div>
      </div>
    )
  }
}

export default BrowseHeader;