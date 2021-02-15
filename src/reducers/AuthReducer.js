import {
  EMAIL_CHANGE,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGE,
  LOGIN_USER,
} from '../actions/types';

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, email: action.payload, error: ''};
    case PASSWORD_CHANGE:
      return {...state, password: action.payload, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload, error: '', loading: false};
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Fail',
        password: '',
        loading: false,
      };
    case LOGIN_USER:
      return {...state, loading: true};
    default:
      return state;
  }
};

const initialState = {
  email: '',
  user: null,
  password: '',
  error: '',
  loading: false,
};
