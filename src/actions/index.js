import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';
import firebase from 'firebase';

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};
export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};
export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text,
  };
};

const loginUserSuccess = (dispatch, playload) => {
  console.log(playload);
  dispatch({type: LOGIN_USER_SUCCESS, payload: playload});
};
const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};
