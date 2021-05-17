import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class ViewAllOperators extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    this.props.OperatorAction.getOperators()
}
render()
{
    let op=this.props.opt;
    return(
        <div>
        <h1>OPERATOR</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>OPERATOR CODE</th>
                    <th>FIRST NAME</th>
                    <th>CITY</th>
                   <th>DEPARTMENT ID</th>
                    

                </tr>
            </thead>
            <tbody>
                {
                    op.map(operator=>
                     <tr key={operator.operatorId}align="center">
                         <td>{operator.operatorId}</td>
                         <td>{operator.firstName}</td>
                         <td>{operator.city}</td>
                         <td>{operator.department.departmentID}</td>
                         


                         <td><Link to={{pathname:'/modifyopt',state:{operator}}}><button className="btn btn-danger">Update</button></Link></td>
                         <td><Link to={`/operator/${operator.operatorId}`}><button className="btn btn-danger">Delete</button></Link></td>
                         <td><Link to={`/viewoperator/${operator.operatorId}`}><button className="btn btn-danger">View</button></Link></td>
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
        <Link to="/AdminHome"> <button className="btn btn-warning">Back</button></Link>
    </div>
);
}
}
function mapStateToProps(state){
    return{
        opt:state.OperatorReducer.opt
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllOperators);