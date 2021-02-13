import {EMAIL_CHANGE, PASSWORD_CHANGE} from './types';
import firebase from 'firebase';

export const login = ({email, password}) => {
  return null;
};
export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGE,
    playload: text,
  };
};
export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGE,
    playload: text,
  };
};
