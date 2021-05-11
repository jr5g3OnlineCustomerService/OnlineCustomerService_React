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
    let op=this.props.operator;
    return(
        <div>
        <h1>OPERATOR</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>OPERATOR CODE</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>CITY</th>
                    <th>PASSWORD</th>

                </tr>
            </thead>
            <tbody>
                {
                    op.map(operator=>
                     <tr key={operator.operatorId}align="center">
                         <td>{operator.operatorId}</td>
                         <td>{operator.firstName}</td>
                         <td>{operator.lastName}</td>
                         <td>{operator.email}</td>
                         <td>{operator.mobile}</td>
                         <td>{operator.city}</td>
                         <td>{operator.password}</td>


                         <td><button className="btn btn-warning">Update</button></td>
                         <td><Link to={`/operator/${operator.operatorId}`}><button className="btn btn-danger">Delete</button></Link></td>
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
        operator:state.OperatorReducer.operator
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllOperators);