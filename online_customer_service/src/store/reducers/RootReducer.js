import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DepartmentReducer from './DepartmentReducer';
import OperatorReducer from './OperatorReducer';

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,OperatorReducer
});
export default RootReducer;