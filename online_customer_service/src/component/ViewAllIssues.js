import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as IssueAction from '../store/actions/IssueAction'

class ViewAllIssues extends Component{
   constructor(props){
        super(props)
    }
componentDidMount(){
    //let log=this.props.login;
    let search=window.location.search;
        let params=new URLSearchParams(search);
        let operatorId=sessionStorage.getItem('operatorId')
    this.props.IssueAction.getIssues(operatorId)
}
render()
{
    let view=sessionStorage.getItem('operatorId')
    let stock=this.props.issue;
    return(
        <div>
        <h1>Issue</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>ISSUE CODE</th>
                    <th>ISSUE TYPE</th>
		    <th>DESCRIPTION</th>
		    <th>ISSUE STATUS</th>
            <th>CUSTOMER ID</th>
		    
                </tr>
            </thead>
            <tbody>
                {
                    stock.map(issue=>  
                     <tr key={issue.issueId}align="center">
                         <td>{issue.issueId}</td>
                         <td>{issue.issueType}</td>
			             <td>{issue.description}</td>
			             <td>{issue.issueStatus}</td>
                         <td>{issue.customer.customerId}</td>
                         <td><Link to={{pathname:'/addSoln',state:{issue}}}><button className="btn btn-danger">Add</button></Link></td>
                         <td><Link to={`/close/${issue.issueId}`}><button className="btn btn-danger">Close</button></Link></td>
                     
                         
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
        <Link to={`/ViewSolById/${view}`}><button className="btn btn-danger">View</button></Link>
        <Link to="/operatorhome">   <button className="btn btn-success" style={{background:'#6C63FF'}}>Back To Operator Home Page</button>
   </Link>
    </div>
);
}
}
function mapStateToProps(state){
    return{
        issue:state.IssueReducer.issue,
        login:state.OperatorReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return{
        IssueAction:bindActionCreators(IssueAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllIssues);