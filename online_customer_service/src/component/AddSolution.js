import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Link} from 'react-router-dom';

class AddSolution extends Component{
    constructor(props){
        super(props)
        this.state={
            solutionDescription:'',
            issueId:props.location.state.issue.issueId,
            operatorId:sessionStorage.getItem('operatorId'),
            customerId:props.location.state.issue.customer.customerId
        }
        this.registration = this.registration.bind(this);
    }
     registration =(reg)=>{
        let payload = {
           solutionDescription:this.state.solutionDescription,
	   issueId:this.state.issueId,
       operatorId:this.state.operatorId,
       customerId:this.state.customerId,
        }
        this.props.OperatorAction.addSol1(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        let adsol=this.props.adsol;
        if(adsol!==undefined)
        window.location.href="/viewallissues";
    return(
    <div>
        <h1>Add Solution Page</h1>
        <form>
            <div className="form-group">
                <label> solutionDescription</label>
                <input type="text" name="solutionDescription" value={this.state.solutionDescription} className="form-control" onChange={this.onChange}></input>

                 <label>issueId</label>
                    <input type="text" name="issueId" value={this.state.issueId} className="form-control" onChange={this.onChange}readOnly></input>
                    
                <label>operatorId</label>
                    <input type="text" name="operatorId" value={this.state.operatorId} className="form-control" onChange={this.onChange}readOnly></input>

                    <label>customerId</label>
                    <input type="text" name="customerId" value={this.state.customerId} className="form-control" onChange={this.onChange}></input>

            </div>
            <button className="btn btn- /sucess" onClick={this.registration}>Click</button>
        </form>
        <Link to="/viewallissues">   <button className="btn btn-success" style={{background:'#6C63FF'}}>Back</button>
   </Link>  
    </div>
    );
}
}
function mapStateToProps(state){
    return{
       adsol: state.OperatorReducer.adsol,
       issue:state.IssueReducer.issue,
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddSolution);