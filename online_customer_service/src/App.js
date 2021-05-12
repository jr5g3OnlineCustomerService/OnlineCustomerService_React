
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorLogin from './component/OperatorLogin';
import OperatorRegisteration from './component/OperatorRegisteration';
import AdminLogin from './component/AdminLogin';
import AddDepartment from './component/AddDepartment';
import ViewAllDepartments from './component/ViewAllDepartments';
import DeleteDepartment from './component/DeleteDepartment';
import CustomerLogin from './component/CustomerLogin';
import RegisterCustomer from './component/RegisterCustomer';
import ViewAllOperators from './component/ViewAllOperators';
import DeleteOperator from './component/DeleteOperator';
import ViewDepartmentById from './component/ViewDepartmentById';
import ViewIssueById from './component/ViewIssueById';
import ViewAllIssues from './component/ViewAllIssues';
import AddIssue from './component/AddIssue';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={OperatorLogin}></Route>
          <Route path="/operatorReg" exact component={OperatorRegisteration}></Route>
          <Route path="/admin" exact component={AdminLogin}></Route>
          <Route path="/dept" exact component={AddDepartment}></Route>
          <Route path="/alldept" exact component={ViewAllDepartments}></Route>
          <Route path="/dept/:id" exact component={DeleteDepartment}></Route>
          <Route path="/customer" exact component={CustomerLogin}></Route>
          <Route path="/addCust" exact component={RegisterCustomer}></Route>
          <Route path="/alloperator" exact component={ViewAllOperators}></Route>
          <Route path="/operator/:id" exact component={DeleteOperator}></Route>
          <Route path="/viewdepbyid" exact component={ViewDepartmentById}></Route>
          <Route path="/addIssue" exact component={AddIssue}></Route>
          <Route path="/viewissuebyid" exact component={ViewIssueById}></Route>
          <Route path="/viewallissues" exact component={ViewAllIssues}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
