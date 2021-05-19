
import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class ViewSolById extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    const {OperatorAction, match} = this.props;
       OperatorAction.findSolById(match.params.id);
    //this.props.CustomerAction.getSolutionByIssueId(sessionStorage.getItem('customerId'))
}
render()
{
    let stock=this.props.sol;
    //alert(sol);
    return(
        <div>
        <h1>Solution</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                <th>ISSUE ID</th>
                    
		    <th>SOLUTION DESCRIPTION</th>
		    <th>SOLUTION DATE</th>
            <th>SOLUTION CODE</th>
                       
                </tr>
            </thead>
            <tbody>
                {
                      stock.map(sol=>
                     <tr key={sol.solutionId}align="center">
                         <td>{sol.issue.issueId}</td>
                         
                         <td>{sol.solutionDescription}</td>
                         <td>{sol.solutionDate}</td>
                         <td>{sol.solutionId}</td>
                        
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
        <Link to="/viewallissues">   <button className="btn btn-success" style={{background:'#6C63FF'}}>Back</button>
   </Link>
    </div>
);
}
}
function mapStateToProps(state){
    return{
        sol:state.OperatorReducer.sol,
        issue:state.IssueReducer.issue
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewSolById);
