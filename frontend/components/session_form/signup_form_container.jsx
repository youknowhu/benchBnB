import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
