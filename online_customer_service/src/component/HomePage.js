import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        //let data = sessionStorage.getItem('customerId');
        //debugger;
        //alert(data);
        return(
            <div>
		<h5><em>CUSTOMER SERVICE CENTER WEBSITE</em></h5>
		<div class="row">
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fal fa-user-lock-lg"aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Admin </h5>
                        <p class="card-text"></p>
			            <Link to='/admin'>
              <button className="btn btn-success" ><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			  <div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <div class="card-body text-center">
			            <h5 class="card-title">Operator</h5>
			            <p class="card-text"></p>
			            <Link to='/oplogin'>
              <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			<div class="col-sm-4">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
                <i class="fad fa-users-cog"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Customer</h5>
			            <p class="card-text"></p>
			            <Link to='/customer'>
              <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			</div>
		</div>
        ); 
    }
}
   
    export default(HomePage);