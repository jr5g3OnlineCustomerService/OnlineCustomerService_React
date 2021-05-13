import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';

class ViewCustomerByEmail extends Component{
   componentDidMount(){
       const {OperatorAction, match} = this.props;
       OperatorAction.viewCustByEmail(match.params.email);
   }
   render(){
      // if(this.props.getop !== undefined){
       //   this.props.history.push("/alloperator");
      // }
         
        let bymail=this.props.ctrmail;
         
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
                            
                           <tr key={bymail.customerId}align="center">
                               <td>{bymail.customerId}</td>
                               <td>{bymail.firstName}</td>
                               <td>{bymail.lastName}</td>
                               <td>{bymail.email}</td>
                               <td>{bymail.mobile}</td>
                               <td>{bymail.city}</td>
                               
                           </tr>
                          
                           }
                             
                    </tbody>
              </table><br/>
          </div>
      );
    }
       
   }


function mapStateToProps(state) {
    return {
        ctrmail : state.OperatorReducer.ctrmail
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomerByEmail);