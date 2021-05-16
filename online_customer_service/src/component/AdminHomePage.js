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
            <div>
		<h5><u>WELCOME ADMIN</u></h5>
		<div class="row">
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-eye fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Add Department </h5>
			            <p class="card-text"></p>
			            <Link to='/dept'>
              <button className="btn btn-success" >Add Department <i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			  <div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			       <i class="fa fa-search fa-lg" aria-hidden="true" ></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">View All Departments</h5>
			            <p class="card-text"></p>
			            <Link to='/alldept'>
              <button className="btn btn-success">View All Departments <i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">View All Operators</h5>
			            <p class="card-text"></p>
			            <Link to='/alloperator'>
              <button className="btn btn-success">View All Operators <i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			</div>
		</div>
        ); 
    }
}
   
    export default(AdminHomePage);