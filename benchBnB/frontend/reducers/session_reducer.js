import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  currentUser: null,
  // errors: [],
};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:

      return action.currentUser;
    default:
      return state;
  }
};
