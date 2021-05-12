import React,{ Component,Redirect } from 'react';
import {connect} from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import { bindActionCreators } from 'redux';

class ViewDepartmentById extends Component{
    constructor(props){
        super(props)
        this.state={
            departmentID:0
        }
        this.findDept=this.findDept.bind(this);
    }
    findDept=(add)=>{
        let payload={
            departmentID:this.state.departmentID  
        }
        this.props.DepartmentAction.findDepById(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    let stock=this.props.dept;
    return(
    <div>
        <h1>AddDepartment Page</h1>
        <form>
            <div className="form-group">
                <label>DepartmentID</label>
                <input type="text" name="departmentID" value={this.state.departmentID} className="form-control" onChange={this.onChange}></input>

                
            </div>
            <button className="btn btn-sucess" onClick={this.findDept}>View</button>
        </form>

        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>DEPARTMENT CODE</th>
                    <th>DEPARTMENT NAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    stock.map(dept=>
                     <tr key={dept.departmentID}align="center">
                         <td>{dept.departmentID}</td>
                         <td>{dept.departmentName}</td>
                
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
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
export default connect(mapStateToProps,mapDispatchToProps)(ViewDepartmentById);