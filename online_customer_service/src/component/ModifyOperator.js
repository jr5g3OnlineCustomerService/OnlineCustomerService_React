import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';


class ModifyOperator extends Component {
    constructor(props){
        super(props)
        this.state = {
            operatorId : props.location.state.operator.operatorId,
            firstName : props.location.state.operator.firstName,
 	        lastName : props.location.state.operator.lastName,
	        email : props.location.state.operator.email,  
            city : props.location.state.operator.city,
            mobile : props.location.state.operator.mobile,   
            departmentID: props.location.state.operator.department.departmentID
    }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateOpt= (e) =>{
        e.preventDefault();
        let payload = {
            operatorId : this.state.operatorId,
            firstName : this.state.firstName,
 	    lastName : this.state.lastName,
	    email : this.state.email,  
            city : this.state.city,
            mobile : this.state.mobile,    
            departmentID: this.state.departmentID,
        }
        this.props.DepartmentAction.modifyOpt(payload);
      
        window.location.href="/alloperator";
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       
        
        return(
            <div>
			    <h1>Update  Item </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Operator Id</label>
						<input type="text" name="operatorId" className="form-control" value={this.state.operatorId} onChange={this.onChange}  readOnly></input><br></br>
				       <label>Enter First name</label>
						<input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}  required="required"></input><br></br>
					<label>Enter Last name</label>
						<input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}  required="required"></input><br></br>
                		        <label>Enter Email</label>
						<input type="text" name="email" className="form-control" value={this.state.email} onChange={this.onChange}  required="required"></input><br></br>
			                <label>Enter City</label>
						<input type="text" name="city" className="form-control" value={this.state.city} onChange={this.onChange}  required="required"></input><br></br>
				        <label>Enter Mobile</label>
						<input type="text" name="mobile" className="form-control" value={this.state.mobile} onChange={this.onChange}  required="required"></input><br></br>
					<label>Enter Department ID</label>
						<input type="text" name="departmentID" className="form-control" value={this.state.departmentID} onChange={this.onChange}  required="required" readOnly></input><br></br>	


					</div>
						<button className="btn btn-success" onClick={this.updateOpt}>update item</button>
                        <Link to="/alloperator"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editopt : state.DepartmentReducer.editopt,
       optid:state.DepartmentReducer.optid,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        DepartmentAction : bindActionCreators(DepartmentAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(ModifyOperator);

