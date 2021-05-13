import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';

class ViewCustomerById extends Component{
   componentDidMount(){
       const {OperatorAction, match} = this.props;
       OperatorAction.viewCustById(match.params.id);
   }
   render(){
      // if(this.props.getop !== undefined){
       //   this.props.history.push("/alloperator");
      // }
         
        let cstid=this.props.byid;
         
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
                           
                           <tr key={cstid.customerId}align="center">
                               <td>{cstid.customerId}</td>
                               <td>{cstid.firstName}</td>
                               <td>{cstid.lastName}</td>
                               <td>{cstid.email}</td>
                               <td>{cstid.mobile}</td>
                               <td>{cstid.city}</td>
                               
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
        byid : state.OperatorReducer.byid,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomerById);