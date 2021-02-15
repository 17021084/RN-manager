import {EMPLOYEE_CREATE} from '../actions/types';

const initialState = {
  employeeList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      let newList = [...state.employeeList, action.payload];
      return {...state, employeeList: newList};
    default:
      return state;
  }
};
