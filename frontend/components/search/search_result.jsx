import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import BrowseHeader from "../browse/browse_header";
import GenresIndexContainer from "../genres/genres_index_container";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // NEED TO REFACTOR THIS PAGE AND GET IT UP AND RUNNING!
  render() {
    return (
      <div className="search-page">
        <BrowseHeader logout={this.props.logout} currentProfile={this.props.currentProfile} profiles={this.props.profiles} logoutCurrentUser={this.props.logoutCurrentUser} logoutCurrentProfile={this.props.logoutCurrentProfile} clearVideos={this.props.clearVideos} />
        <div className="search-main">
          <div className="search-main-container">
            <div className="browse-search-container">
              <GenresIndexContainer />
            </div>
          </div>
        </div>
        <footer className="browse-footer">
          <div className='links-wrapper'>
            <p>Questions? Check out these links!</p>

            <ul>
              <li>
                <a href="https://github.com/keginzburg/webflix">GitHub</a>
              </li>
              <li>
                <a href="#">My AngelList</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kyleginzburg/">My LinkedIn</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(null, null)(SearchResult));