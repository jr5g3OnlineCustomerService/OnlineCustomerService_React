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
            departmentName : props.location.state.dept.departmentName
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateDept= (e) =>{
        e.preventDefault();
        let payload = {
            departmentID : this.state.departmentID,
            departmentName : this.state.departmentName,
        }
        this.props.DepartmentAction.modifydept(payload);
      
        window.location.href="/alldept";
       
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
                    <label>Enter Department Id</label>
						<input type="text" name="departmentID" className="form-control" value={this.state.departmentID} onChange={this.onChange}  readOnly></input><br></br>
					    <label>Enter Department name</label>
						<input type="text" name="departmentName" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required"></input><br></br>
					
                    </div>
						<button className="btn btn-success" onClick={this.updateDept}>update item</button>
                        <Link to="/alldept"> <button className="btn btn-default">Cancel</button></Link> 
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