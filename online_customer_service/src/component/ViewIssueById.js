import React,{ Component,Redirect } from 'react';
import {connect} from 'react-redux';
import * as IssueAction from '../store/actions/IssueAction';
import { bindActionCreators } from 'redux';


class ViewIssueById extends Component{
    constructor(props){
        super(props)
        this.state={
            issueId:0
        }
        this.findIssue=this.findIssue.bind(this);
    }
    findIssue=(add)=>{
        let payload={
            issueId:this.state.issueId 
        }
        this.props.IssueAction.findIssueById(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    let stock=this.props.issue;
    return(
    <div>
        <h1>AddIssue Page</h1>
        <form>
            <div className="form-group">
                <label>Issue ID</label>
                <input type="text" name="issueId" value={this.state.issueId} className="form-control" onChange={this.onChange}></input>

                
            </div>
            <button className="btn btn-sucess" onClick={this.findIssue}>View</button>
        </form>

        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                     <th>ISSUE CODE</th>
                    <th>ISSUE TYPE</th>
		            <th>DESCRIPTION</th>
		             <th>ISSUE STATUS</th>
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
        issue: state.IssueReducer.issue
    };
}
function mapDispatchToProps(dispatch){
    return{
        IssueAction:bindActionCreators(IssueAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewIssueById);