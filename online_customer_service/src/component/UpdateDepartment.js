import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateDepartment extends Component {
    constructor(props){
        super(props)
        this.state = {
            departmentID : props.location.state.dept.departmentID,
            departmentName : props.location.state.dept.departmentName,
            errors:{}
        }
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.departmentName)
        {
            formIsValid = false
            errors['departmentName'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateDept= (e) =>{
        e.preventDefault();
        if(this.validate()){
        let payload = {
            departmentID : this.state.departmentID,
            departmentName : this.state.departmentName,
        }
        this.props.DepartmentAction.modifydept(payload);
    }
        
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       let update=this.props.editdept;
       if(update!==undefined){
           alert("Department Updated");
            window.location.href="/alldept";
       }
        
        return(
            <div class="container">
			    <h1>Update Department</h1>
				 <form >
				    
                    <h5>Department Id</h5>
						<input type="text" name="departmentID" className="form-control" value={this.state.departmentID} onChange={this.onChange}  readOnly style={{width:"200px",display:"inline-block"}}></input><br></br>
					    <h5>Enter Department name</h5>
						<input type="text" name="departmentName" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<div class="red_color">{this.state.errors.departmentName}</div><br></br>
                        <button className="btn btn-success" onClick={this.updateDept}>Update</button>
                        <Link to="/AdminHome"> <button className="btn btn-warning">Back</button></Link>
					</form>
                   
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editdept : state.DepartmentReducer.editdept,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        DepartmentAction : bindActionCreators(DepartmentAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateDepartment);