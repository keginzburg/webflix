import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUp from './signup_page';
import { removeNewEmail, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id,
  newEmail: state.session.newEmail,
  errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  removeNewEmail: () => dispatch(removeNewEmail()),
  clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);