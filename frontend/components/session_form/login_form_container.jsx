import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
