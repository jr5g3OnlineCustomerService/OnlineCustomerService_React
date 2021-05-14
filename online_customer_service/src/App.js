
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
import AddChat from './component/AddChat';
import UpdateDepartment from './component/UpdateDepartment';
import ViewCustomerById from './component/ViewCustomerById';
import ViewCustomerByName from './component/ViewCustomerByName';
import ViewCustomerByEmail from './component/ViewCustomerByEmail';
import ViewCustomer from './component/ViewCustomer';
import './App.css';
import ViewChatIssue from './component/ViewChatIssue';
import ViewOperatorById from './component/ViewOperatorById';
import CloseIssue from './component/CloseIssue';
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
          <Route path="/addChat" exact component={AddChat}></Route>
          <Route path="/viewChatissues" exact component={ViewChatIssue}></Route>
          <Route path="/updatedept"exact component={UpdateDepartment}></Route>
          <Route path="/viewcustByid/:id" exact component={ViewCustomerById}></Route>
          <Route path="/viewcustByname/:name" exact component={ViewCustomerByName}></Route>
          <Route path="/viewcustByemail/:email" exact component={ViewCustomerByEmail}></Route>
          <Route path="/viewcust" exact component={ViewCustomer}></Route>
          <Route path="/viewoperator/:id" exact component={ViewOperatorById}></Route>
          <Route path="/close/:id" exact component={CloseIssue}></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
