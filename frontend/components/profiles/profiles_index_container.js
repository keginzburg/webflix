import { connect } from "react-redux";
import ProfilesIndex from "./profiles_index";

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  profiles: state.entities.profiles,
})

export default connect(mapStateToProps, null)(ProfilesIndex);