import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import * as IssueAction from '../store/actions/IssueAction'
import Navbar from './Navbar';

class AddIssue extends Component{
    constructor(props){
        super(props)
        this.state={
            issueType: '',
            description:'',
            issueStatus:'',
            customerID:0,
            operatorId:sessionStorage.getItem('operatorId'),
            errors:{}
        }
        this.registration = this.registration.bind(this);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.issueType)
        {
            formIsValid = false
            errors['issueType'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.description)
        {
            formIsValid = false
            errors['description'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.issueStatus)
        {
            formIsValid = false
            errors['issueStatus'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.customerID)
        {
            formIsValid = false
            errors['customerID'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.operatorId)
        {
            formIsValid = false
            errors['operatorId'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
    registration = (reg)=>{
        reg.preventDefault();
        if(this.validate()){
        let payload = {
            issueType:  this.state.issueType,
            description: this.state.description,
            issueStatus: this.state.issueStatus,
            customerID:this.state.customerID,
            operatorId:this.state.operatorId
        }
        this.props.IssueAction.addIssue(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div class="App">
            <Navbar/>
            <h1>Add Issue</h1>
            <form>

                    <label>IssueType </label>
                    <input type="text" name="issueType" value={this.state.issueType} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                    <div>{this.state.errors.issueType}</div><br></br>
		            
                    
                    <label>Description </label>
                    <input type="text" name="description" value={this.state.description} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                    <div>{this.state.errors.description}</div><br></br>
                   
                   
                    <label>IssueStatus </label>
                    <input type="text" name="issueStatus" value={this.state.issueStatus} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                    <div>{this.state.errors.issueStatus}</div><br></br>
                   
                   
                     <label>CustomerId </label>
                    <input type="text" name="customerID" value={this.state.customerID} className="form-control" onChange={this.onChange} readOnly style={{width:"200px",display:"inline-block"}}></input>
                    <div>{this.state.errors.customerID}</div><br></br>
                    
                   
                    <label>OperatorId </label>
                    <input type="text" name="operatorId" value={this.state.operatorId} className="form-control" onChange={this.onChange} readOnly style={{width:"200px",display:"inline-block"}}></input>
                    <div>{this.state.errors.operatorId}</div><br></br>
                    

                
                <button className="btn btn-success" onClick={this.registration}>Submit</button><br/>
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