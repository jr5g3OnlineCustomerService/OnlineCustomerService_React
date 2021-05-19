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
            password:props.location.state.operator.password,   
            departmentID: props.location.state.operator.department.departmentID,
            errors:{}
    }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.operatorId)
        {
            formIsValid = false
            errors['operatorId'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.firstName)
        {
            formIsValid = false
            errors['firstName'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.lastName)
        {
            formIsValid = false
            errors['lastName'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.departmentID)
        {
            formIsValid = false
            errors['departmentID'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.email)
        {
            formIsValid = false
            errors['email'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.city)
        {
            formIsValid = false
            errors['city'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
 
    updateOpt= (e) =>{
        e.preventDefault();
        if(this.validate()){ 
        let payload = {
            operatorId : this.state.operatorId,
            firstName : this.state.firstName,
 	    lastName : this.state.lastName,
	    email : this.state.email,  
            city : this.state.city,
            mobile : this.state.mobile,
            password:this.state.password,    
            departmentID: this.state.departmentID
        }
        this.props.DepartmentAction.modifyOpt(payload);
      
        window.location.href="/alloperator";
    } 
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       let opt=this.props.editopt;
       if(opt!==undefined){
           alert("Operator Updated");
       }
        
        return(
            <div class="container">
			    <h1>Update Operator</h1>
				 <form >
				    
                    <h6>Enter Operator Id</h6>
					<input type="text" name="operatorId" className="form-control btn_size" value={this.state.operatorId} onChange={this.onChange}  readOnly></input><br></br>
                    <div class="red_color">{this.state.errors.operatorId}</div><br></br>
				  

                    <h6>Enter First name</h6>
					<input type="text" name="firstName" className="form-control btn_size" value={this.state.firstName} onChange={this.onChange}  required="required"></input><br></br>
                    <div class="red_color">{this.state.errors.firstName}</div><br></br>
					
                    
                    <h6>Enter Last name</h6>
					<input type="text" name="lastName" className="form-control btn_size" value={this.state.lastName} onChange={this.onChange}  required="required"></input><br></br>
                    <div class="red_color">{this.state.errors.lastName}</div><br></br>
                	
                    
                    <h6>Enter Email</h6>
					<input type="text" name="email" className="form-control btn_size" value={this.state.email} onChange={this.onChange}  required="required"></input><br></br>
                    <div class="red_color">{this.state.errors.email}</div><br></br>
			        
                    
                    <h6>Enter City</h6>
					<input type="text" name="city" className="form-control btn_size" value={this.state.city} onChange={this.onChange}  required="required"></input><br></br>
                    <div class="red_color">{this.state.errors.city}</div><br></br>
				
                   
                    <h6>Enter Mobile</h6>
					<input type="text" name="mobile" className="form-control btn_size" value={this.state.mobile} onChange={this.onChange}  required="required"></input><br></br>
                    <div class="red_color">{this.state.errors.mobile}</div><br></br>
				
                
                	<h6>Enter Department ID</h6>
					<input type="text" name="departmentID" className="form-control btn_size" value={this.state.departmentID} onChange={this.onChange}  required="required" readOnly></input><br></br>	
                    <div class="red_color">{this.state.errors.departmentID}</div><br></br>
                   
						<button className="btn btn-success btn_top_pad" onClick={this.updateOpt}>Update</button>
                        <Link to="/alloperator"> <button className="btn btn-danger btn_top_pad">Cancel</button></Link> 
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

