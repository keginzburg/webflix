import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSearchVideos } from "../../actions/search_actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      searchQuery: "",
    }
    this.expandSearchBar = this.expandSearchBar.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
  }


  expandSearchBar(e) {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  updateSearchQuery(e) {
    this.setState({ searchQuery: e.currentTarget.value });
    this.props.history.push({
      search: `q=${e.currentTarget.value}`
    });
    this.props.fetchSearchVideos(this.state.searchQuery);
  }


  render() {
    return (
      this.state.searchOpen ? 
        <div className="search-bar-container-open" >
          <img className="search-icon" src={window.searchIcon} alt="search icon" onClick={this.expandSearchBar}/>
          <input type="text" placeholder="Titles" value={this.state.searchQuery} onChange={this.updateSearchQuery}/>
        </div> : 
        <div className="search-bar-container" onClick={this.expandSearchBar} >
          <img className="search-icon" src={window.searchIcon} alt="search icon" />
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
    fetchSearchVideos: search => dispatch(fetchSearchVideos(search)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Search));