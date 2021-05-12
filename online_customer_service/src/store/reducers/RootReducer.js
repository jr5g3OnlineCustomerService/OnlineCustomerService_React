import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer'
import CustomerReducer from './CustomerReducer'

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,CustomerReducer
});
export default RootReducer;