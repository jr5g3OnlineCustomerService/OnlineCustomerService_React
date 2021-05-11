import React,{ Component,Redirect } from 'react';
import {connect} from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import { bindActionCreators } from 'redux';

class AddDepartment extends Component{
    constructor(props){
        super(props)
        this.state={
            departmentName:''
        }
        this.addDept=this.addDept.bind(this);
    }
    addDept=(add)=>{
        let payload={
            departmentName:this.state.departmentName
            
        }
        this.props.DepartmentAction.addDept1(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    if(this.props.addItems==='added')
    return <Redirect to="/"></Redirect>
    return(
    <div>
        <h1>AddDepartment Page</h1>
        <form>
            <div className="form-group">
                <label>Departmentname</label>
                <input type="text" name="departmentName" value={this.state.departmentName} className="form-control" onChange={this.onChange}></input>

                
            </div>
            <button className="btn btn-sucess" onClick={this.addDept}>AddItems</button>
        </form>
    </div>
    );
}
}
function mapStateToProps(state){
    return{
        dept: state.DepartmentReducer.dept,
    };
}
function mapDispatchToProps(dispatch){
    return{
        DepartmentAction:bindActionCreators(DepartmentAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddDepartment);