import React,{ Component,Redirect } from 'react';
import {connect} from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
class AddDepartment extends Component{
    constructor(props){
        super(props)
        this.state={
            departmentName:'',
            errors:{}
        }
        this.addDept=this.addDept.bind(this);
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
    addDept=(add)=>{    
        add.preventDefault();
        if(this.validate()){
        let payload={
            departmentName:this.state.departmentName  
        }
        this.props.DepartmentAction.addDept1(payload);
        }
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    
    return(
    <div>
        <h1>AddDepartment Page</h1>
        <form>
            <div className="form-group">
                <label>Departmentname</label>
                <input type="text" name="departmentName" value={this.state.departmentName} className="form-control" onChange={this.onChange}></input>
                <div>{this.state.errors.departmentName}</div><br></br>
                
            </div>
            <button className="btn btn-sucess" onClick={this.addDept}>AddItems</button>
        </form>
        <Link to="/AdminHome"> <button className="btn btn-default">Back</button></Link>
    </div>
    );
}
}
function mapStateToProps(state){
    return{
        dept: state.DepartmentReducer.dept
    };
}
function mapDispatchToProps(dispatch){
    return{
        DepartmentAction:bindActionCreators(DepartmentAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddDepartment);