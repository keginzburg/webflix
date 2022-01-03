import React from "react";

class ProfilesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ul className="profiles-index-list">
        <li>Profile 1</li>
        <li>Profile 2</li>
        <li>Profile 3</li>
        <li>Profile 4</li>
        <li>Add Profile</li>
      </ul>
    )
  }
}

export default ProfilesIndex;