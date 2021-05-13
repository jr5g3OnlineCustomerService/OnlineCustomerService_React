import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';

class ViewCustomerByName extends Component{
   componentDidMount(){
       const {OperatorAction, match} = this.props;
       OperatorAction.viewCustByName(match.params.name);
   }
   render(){
      // if(this.props.getop !== undefined){
       //   this.props.history.push("/alloperator");
      // }
         
        let byname=this.props.ctrname;
         
          return(
              <div>
              <h1>CUSTOMER</h1>
              <table className="table-bordered table-dark" align="center" width="50%" border="1">
                  
                  <thead>
                      <tr>
                          <th>CUSTOMER ID</th>
                          <th>FIRST NAME</th>
                          <th>LAST NAME</th>
                          <th>EMAIL</th>
                          <th>MOBILE</th>
                          <th>CITY</th>
                         
                          
      
                      </tr>
                  </thead>
                  <tbody>
                      {
                            byname.map(cstnme =>
                           <tr key={cstnme.customerId}align="center">
                               <td>{cstnme.customerId}</td>
                               <td>{cstnme.firstName}</td>
                               <td>{cstnme.lastName}</td>
                               <td>{cstnme.email}</td>
                               <td>{cstnme.mobile}</td>
                               <td>{cstnme.city}</td>
                               
                           </tr>
                          
                            )}
                             
                    </tbody>
                    
              </table><br/>
          </div>
          );
    }
       
   }


function mapStateToProps(state) {
    return {
        ctrname : state.OperatorReducer.ctrname,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomerByName);
