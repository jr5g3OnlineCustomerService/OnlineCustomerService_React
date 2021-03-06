
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
import OperatorChangePassword from './component/OperatorChangePassword';
import OperatorHome from './component/OperatorHome';
import CustomerHomePage from './component/CustomerHomePage';
import CustomerChangePassword from './component/CustomerChangePassword';
import ViewAllCustomerIssue from './component/ViewAllCustomerIssue';
import ReopenIssues from './component/ReopenIssues';
import ModifyOperator from './component/ModifyOperator';
import ViewSolById from './component/ViewSolById'
import AddSolution from './component/AddSolution';
import AdminHomePage from './component/AdminHomePage';
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import ViewSolutionByIssueId from './component/ViewSolutionByIssueId';
import AboutUs from './component/AboutUs';
import UpdateSolution from './component/UpdateSolution';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/oplogin" exact component={OperatorLogin}></Route>
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
          <Route path="/opchangepassword" exact component={OperatorChangePassword}></Route>
          <Route path="/operatorhome" exact component={OperatorHome}></Route>
          <Route path="/Customerhome" exact component={CustomerHomePage}></Route>
          <Route path="/custchangepassword" exact component={CustomerChangePassword}></Route>
          <Route path="/viewallcustissue" exact component={ViewAllCustomerIssue}></Route>
          <Route  path="/reopn/:id" exact component={ReopenIssues}></Route>      
          <Route path="/modifyopt" exact component ={ModifyOperator}></Route>
          <Route path="/ViewSolById/:id" exact component={ViewSolById}></Route> 
          <Route path="/addSoln" exact component={AddSolution}></Route>
          <Route path="/AdminHome" exact component={AdminHomePage}></Route>
          <Route path="/nav" exact component={Navbar}></Route>
          <Route path="/viewsolns/:id" exact component={ViewSolutionByIssueId}></Route>
          <Route path="/aboutus" exact component={AboutUs}></Route> 
          <Route path="/modifysoln" exact component={UpdateSolution}></Route>
          <Router></Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
