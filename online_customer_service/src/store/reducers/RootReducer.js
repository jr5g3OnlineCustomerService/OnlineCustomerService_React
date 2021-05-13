import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer'
import CustomerReducer from './CustomerReducer'
import OperatorReducer from './OperatorReducer';
import IssueReducer from './IssueReducer';
import ChatReducer from './ChatReducer';
const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,CustomerReducer,OperatorReducer,IssueReducer,ChatReducer,

});
export default RootReducer;