import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
class OperatorLogin extends Component{
    constructor(props){
        super(props)
    }
render(){
    let data = sessionStorage.getItem('operatorId');
    
    debugger
    //alert(data);
    return(
        <div class="App">
			<Navbar/>
		<h5>WELCOME {sessionStorage.getItem('opfirstName')}</h5>
		<div class="row">
			<div class="col-sm-3">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-eye fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">View Chat Issues</h5>
			            <p class="card-text"></p>
			            <Link to="/viewChatissues"> <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link> 
			        </div>
			    </div>
			</div>
			  <div class="col-sm-3">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			       <i class="fa fa-search fa-lg" aria-hidden="true" ></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Add Customer Issues</h5>
			            <p class="card-text"></p>
			            <Link to="/addIssue"> <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			<div class="col-sm-3">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">View All Issues</h5>
			            <p class="card-text"></p>
			            <Link to="/viewallissues"> <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
            <div class="col-sm-3">
			    <div class="card img" style={{width: "100%" ,height: "150px"}}>
			        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
			        <div class="card-body text-center">
			            <h5 class="card-title">Change Password</h5>
			            <p class="card-text"></p>
			            <Link to="/opchangepassword"> <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
			        </div>
			    </div>
			</div>
			</div>
		</div>

    );
}

}
function mapStateToProps(state){
    return{
       login : state.OperatorReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return{
        //OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
//export default(OperatorLogin);
export default connect(mapStateToProps,mapDispatchToProps)(OperatorLogin);