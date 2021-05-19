import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateSolution extends Component {
    constructor(props){
        super(props)
        this.state = {
            solutionId: props.location.state.sol.solutionId,
            solutionDescription: props.location.state.sol.solutionDescription,
            solutionDate: props.location.state.sol.solutionDate,
            customerId: props.location.state.sol.customerId,
            operatorId:props.location.state.sol.operatorId,
            errors:{}
        }
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        this.setState({ errors })
        if(!this.state.solutionDescription)
        {
            formIsValid = false
            errors['solutionDescription'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.solutionDate)
        {
            formIsValid = false
            errors['solutionDate'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.customerId)
        {
            formIsValid = false
            errors['customerId'] = '*Please enter this field '
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
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateSol= (e) =>{
        e.preventDefault();
        if(this.validate()){
        let payload = {
            solutionId: this.state.solutionId,
            solutionDescription:this.state.solutionDescription,
            solutionDate: this.state.solutionDate,
            customerId: this.state.customerId,
            operatorId:this.state.operatorId,
        }
        this.props.DepartmentAction.modifySol(payload);
    }
        
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
       let update=this.props.editsol;
       if(update!==undefined){
           alert("Solution Updated");
            window.location.href="/allsol";
       }
        
        return(
            <div class="container">
			    <h1>Update Department</h1>
				 <form >
				    
                    <h5>Solution Id</h5>
						<input type="text" name="SolutionId" className="form-control" value={this.state.departmentID} onChange={this.onChange}  readOnly style={{width:"200px",display:"inline-block"}}></input><br></br>
					    <h5>Enter Solution Description </h5>
						<input type="text" name="solutionDescription" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<div>{this.state.errors.solutionDescription}</div><br></br>
                        <input type="text" name="solutionDate" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<div>{this.state.errors.solutionDate}</div><br></br>
                        <input type="text" name="customerId" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<div>{this.state.errors.customerId}</div><br></br>
                        <input type="text" name="operatorId" className="form-control" value={this.state.departmentName} onChange={this.onChange}  required="required" style={{width:"200px",display:"inline-block"}}></input><br></br>
						<div>{this.state.errors.operatorId}</div><br></br>
                        <button className="btn btn-success" onClick={this.updateSol}>Update</button>
                        <Link to="/operatorhome"> <button className="btn btn-warning">Back</button></Link>
					</form>
                   
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editsol : state.OperatorReducer.editsol,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateSolution);