import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Redirect} from 'react-router-dom';

class AddSolution extends Component{
    constructor(props){
        super(props)
        this.state={
            solutionDescription:'',
            issueId:0,
            operatorId:0
        }
        this.registration = this.registration.bind(this);
    }
     registration =(reg)=>{
        let payload = {
           solutionDescription:this.state.solutionDescription,
	   issueId:this.state.issueId,
       operatorId: this.state.operatorId
        }
        this.props.OperatorAction.addSol1(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
    return(
    <div>
        <h1>Add Solution Page</h1>
        <form>
            <div className="form-group">
                <label> solutionDescription</label>
                <input type="text" name="solutionDescription" value={this.state.solutionDescription} className="form-control" onChange={this.onChange}></input>

                 <label>issueId</label>
                    <input type="text" name="issueId" value={this.state.issueId} className="form-control" onChange={this.onChange}></input>
                    
                <label>operatorId</label>
                    <input type="text" name="operatorId" value={this.state.operatorId} className="form-control" onChange={this.onChange}></input>


            </div>
            <button className="btn btn-sucess" onClick={this.registration}>Click</button>
        </form>
    </div>
    );
}
}
function mapStateToProps(state){
    return{
       adsol: state.OperatorReducer.adsol
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddSolution);