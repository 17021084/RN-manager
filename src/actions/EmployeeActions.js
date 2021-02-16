import {EMPLOYEE_CREATE} from './types';
import firebase from 'firebase';

export const employeeNew = (employee, user) => {
  const {currentUser} = firebase.auth();
  let uid = currentUser.uid;
  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .push(employee)
    .then((data) => {
      console.log(data);
      return {
        type: EMPLOYEE_CREATE,
        payload: employee,
      };
    });
  // return {
  //   type: EMPLOYEE_CREATE,
  //   payload: employee,
  // };
};
