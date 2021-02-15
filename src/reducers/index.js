import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  banana: () => [],
  auth: AuthReducer,
  employee: EmployeeReducer,
});
