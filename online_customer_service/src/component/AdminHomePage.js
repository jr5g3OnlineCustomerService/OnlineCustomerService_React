import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class AdminHomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        //let data = sessionStorage.getItem('customerId');
        //debugger;
        //alert(data);
        return(
            <div class="row">
            <div className="col-sm-8"><Link to='/dept'>
              <button className="btn btn-success" >Add Department</button></Link>
          </div>
          <div className="col-sm-8"><Link to='/alldept'>
              <button className="btn btn-success">View All Departments</button></Link>
          </div>
          <div className="col-sm-8"><Link to='/alloperator'>
              <button className="btn btn-success">View All Operators</button></Link>
          </div>
      </div>
        ); 
    }
}
   
    export default(AdminHomePage);