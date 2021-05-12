import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
<<<<<<< HEAD
import DepartmentReducer from './DepartmentReducer'
import CustomerReducer from './CustomerReducer'

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,CustomerReducer
=======
import DepartmentReducer from './DepartmentReducer';
import OperatorReducer from './OperatorReducer';

const RootReducer = combineReducers({
    LoginReducer,DepartmentReducer,OperatorReducer
>>>>>>> 89cdef9634e7acf757b4359bbb1c963470a7ba9f
});
export default RootReducer;