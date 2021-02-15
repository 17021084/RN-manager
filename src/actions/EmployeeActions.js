import {EMPLOYEE_CREATE} from './types';

export const employeeNew = (employee) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: employee,
  };
};
