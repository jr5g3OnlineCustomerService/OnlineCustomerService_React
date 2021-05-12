import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer'
import CustomerReducer from './CustomerReducer'
import OperatorReducer from './OperatorReducer';

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,CustomerReducer,OperatorReducer

});
export default RootReducer;