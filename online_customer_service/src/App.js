
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OperatorLogin from './component/OperatorLogin';
import OperatorRegisteration from './component/OperatorRegisteration';
import AdminLogin from './component/AdminLogin';
import AddDepartment from './component/AddDepartment';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
