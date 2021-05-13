
import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';

class ViewSolById extends Component{
    constructor(props){
        super(props)
        this.state={
            solutionId:0
        }
        this.findSol=this.findSol.bind(this);
    }
    findSol=(add)=>{
        let payload={
            solutionId:this.state.solutionID  
        }
        this.props.OperatorAction.findSolbyId(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    let stock=this.props.sol;
    return(
    <div>
        <h1>AddDepartment Page</h1>
        <form>
            <div className="form-group">
                <label>solutionId</label>
                <input type="text" name="solutionId" value={this.state.solutionId} className="form-control" onChange={this.onChange}></input>

                
            </div>
            <button className="btn btn-sucess" onClick={this.findSol}>View</button>
        </form>

        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>SOLUTION CODE</th>
                    <th>SOLUTION DESCRIPTION</th>
                   <th>SOLUTION DATE </th>
                </tr>
            </thead>
            <tbody>
                {
                    stock.map(sol=>
                     <tr key={sol.solutionId}align="center">
                         <td>{sol.solutionId}</td>
                         <td>{sol.solutionDescription}</td>
                          
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
       cust: state.OperatorReducer.cust
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CustomerAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewSolById);