

import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';

class ViewAllSolutions extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    this.props.CustomerAction.getSolutions()
}
render()
{
    let stock=this.props.sol;
    return(
        <div>
        <h1>Solution</h1>
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>SOLUTION CODE</th>
		    <th>SOLUTION DESCRIPTION</th>
		    <th>SOLUTION DATE</th>
                </tr>
            </thead>
            <tbody>
                {
                    stock.map(sol=>
                     <tr key={sol.solutionId}align="center">
                         <td>{sol.solutionId}</td>
                         <td>{sol.solutionDescription}</td>
                         <td>{sol.solutionDate}</td>
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
        sol:state.CustomerReducer.sol
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CustomerAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllSolutions);

