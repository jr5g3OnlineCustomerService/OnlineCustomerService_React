import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class AddSolution extends Component{
    constructor(props){
        super(props)
        this.state={
            solutionDescription:'',
            issueId:props.location.state.issue.issueId,
            operatorId:sessionStorage.getItem('operatorId'),
            customerId:props.location.state.issue.customer.customerId,
            errors: {}
        }
        this.registration = this.registration.bind(this);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.solutionDescription)
        {
            formIsValid = false
            errors['solutionDescription'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.issueId)
        {
            formIsValid = false
            errors['issueId'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.operatorId)
        {
            formIsValid = false
            errors['operatorId'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.customerId)
        {
            formIsValid = false
            errors['customerId'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
     registration =(reg)=>{
        reg.preventDefault();
        if(this.validate()){
        let payload = {
           solutionDescription:this.state.solutionDescription,
	   issueId:this.state.issueId,
       operatorId:this.state.operatorId,
       customerId:this.state.customerId,
        }
        this.props.OperatorAction.addSol1(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        let adsol=this.props.adsol;
        if(adsol!==undefined){
            alert("Solution Added");
            window.location.href="/viewallissues";
        }
        
    return(
    <div class="App">
        <Navbar/>
        <h1>Add Solution</h1>
        <form>
           
                <label> SolutionDescription</label>
                <input type="text" name="solutionDescription" value={this.state.solutionDescription} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                <div class="red_color">{this.state.errors.solutionDescription}</div><br></br>

                 <label>IssueId</label>
                    <input type="text" name="issueId" value={this.state.issueId} className="form-control" onChange={this.onChange}readOnly style={{width:"200px",display:"inline-block"}}></input>
                    <div class="red_color">{this.state.errors.issueId}</div><br></br>

                <label>OperatorId</label>
                    <input type="text" name="operatorId" value={this.state.operatorId} className="form-control" onChange={this.onChange}readOnly style={{width:"200px",display:"inline-block"}}></input>
                    <div class="red_color">{this.state.errors.operatorId}</div><br></br>

                    <label>CustomerId</label>
                    <input type="text" name="customerId" value={this.state.customerId} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}} readOnly></input>
                    <div class="red_color">{this.state.errors.customerId}</div><br></br>


           
            <button className="btn btn-success" onClick={this.registration}>Submit</button>
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