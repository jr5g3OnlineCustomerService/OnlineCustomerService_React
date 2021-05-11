import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducers'

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer
});
export default RootReducer;