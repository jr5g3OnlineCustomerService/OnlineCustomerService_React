import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class ViewAllDepartments extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    this.props.DepartmentAction.getDepartments()
}
render()
{
    let stock=this.props.dept;
    return(
        <div>
        <h1>Department</h1>
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
                         <td><Link to={{pathname:'/updatedept',state:{dept}}}><button className="btn btn-warning">Update</button></Link></td>
                         <td><Link to={`/dept/${dept.departmentID}`}><button className="btn btn-danger">Delete</button></Link></td>
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
        <Link to="/AdminHome"> <button className="btn btn-default">Back</button></Link> 
    </div>
);
}
}
function mapStateToProps(state){
    return{
        dept:state.DepartmentReducer.dept
    };
}
function mapDispatchToProps(dispatch){
    return{
        DepartmentAction:bindActionCreators(DepartmentAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllDepartments);