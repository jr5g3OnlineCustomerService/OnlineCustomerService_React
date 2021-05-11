import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer'

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer
});
export default RootReducer;