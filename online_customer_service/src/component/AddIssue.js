import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as IssueAction from '../store/actions/IssueAction'

class AddIssue extends Component{
    constructor(props){
        super(props)
        this.state={
            issueType: '',
            description:'',
            issueStatus:'',
            customerID:0,
            operatorId:sessionStorage.getItem('operatorId')
        }
        this.registration = this.registration.bind(this);
    }
    registration = (reg)=>{
        let payload = {
            issueType:  this.state.issueType,
            description: this.state.description,
            issueStatus: this.state.issueStatus,
            customerID:this.state.customerID,
            operatorId:this.state.operatorId
        }
        this.props.IssueAction.addIssue(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>Add Issue</h1>
            <form>
                <div className="form-group">
                    <label>issueType</label>
                    <input type="text" name="issueType" value={this.state.issueType} className="form-control" onChange={this.onChange}></input>
		            <label>description</label>
                    <input type="text" name="description" value={this.state.description} className="form-control" onChange={this.onChange}></input>
                    <label>issueStatus</label>
                    <input type="text" name="issueStatus" value={this.state.issueStatus} className="form-control" onChange={this.onChange}></input>
                     <label>customerId</label>
                    <input type="text" name="customerID" value={this.state.customerID} className="form-control" onChange={this.onChange}></input>
                    <label>operatorId</label>
                    <input type="text" name="operatorId" value={this.state.operatorId} className="form-control" onChange={this.onChange}></input>
                </div>
                <button className="btn btn-sucess" onClick={this.registration}>Click</button><br/>
<Link to="/operatorhome">
                <button className="btn btn-success" style={{background:'#6C98FF'}}>Back to Operator Home Page</button>
                </Link>
            </form>
        </div>
        ); 
    }
}
function mapStateToProps(state){
    return{
       addIssue: state.IssueReducer.addIssue
    };
}
function mapDispatchToProps(dispatch){
    return{
        IssueAction:bindActionCreators(IssueAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddIssue);