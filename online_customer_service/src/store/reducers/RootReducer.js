import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer'
import CustomerReducer from './CustomerReducer'
import OperatorReducer from './OperatorReducer';
import IssueReducer from './IssueReducer';
const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,CustomerReducer,OperatorReducer,IssueReducer

});
export default RootReducer;