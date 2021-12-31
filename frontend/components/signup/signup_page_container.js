import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './signup_page';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);