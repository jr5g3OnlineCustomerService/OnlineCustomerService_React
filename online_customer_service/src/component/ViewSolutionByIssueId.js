import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class ViewSolutionByIssueId extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    const {CustomerAction, match} = this.props;
       CustomerAction.getSolutionByIssueId(match.params.id);
    //this.props.CustomerAction.getSolutionByIssueId(sessionStorage.getItem('customerId'))
}
render()
{
    let sol=this.props.sol;
    //alert(sol);
    return(
        <div>
        <h1>Solution</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>SOLUTION CODE</th>
		    <th>SOLUTION DESCRIPTION</th>
		    <th>SOLUTION DATE</th>
            <th>ISSUE ID</th>            
                </tr>
            </thead>
            <tbody>
                {
                
                     <tr key={sol.solutionId}align="center">
                         <td>{sol.solutionId}</td>
                         <td>{sol.solutionDescription}</td>
                         <td>{sol.solutionDate}</td>
                        
                     </tr>
                    
                    }
                       
              </tbody>
        </table><br/>
        <Link to="/viewallcustissue">   <button className="btn btn-success" style={{background:'#6C63FF'}}>Back</button>
   </Link>
    </div>
);
}
}
function mapStateToProps(state){
    return{
        sol:state.CustomerReducer.sol,
        issue:state.IssueReducer.issue
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CustomerAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewSolutionByIssueId);


