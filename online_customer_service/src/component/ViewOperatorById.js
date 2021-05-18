import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
class ViewOperatorById extends Component{
   componentDidMount(){
       const {OperatorAction, match} = this.props;
       OperatorAction.viewopbyid(match.params.id);
   }
   render(){
      // if(this.props.getop !== undefined){
       //   this.props.history.push("/alloperator");
      // }
         
          let op=this.props.getop
         
          return(
              <div>
              <h1>OPERATOR</h1>
              <table className="table-bordered table-dark" align="center" width="50%" border="1">
                  
                  <thead>
                      <tr>
                          <th>OPERATOR CODE</th>
                          <th>FIRST NAME</th>
                          <th>LAST NAME</th>
                          <th>EMAIL</th>
                          <th>MOBILE</th>
                          <th>CITY</th>
                          
                          
      
                      </tr>
                  </thead>
                  <tbody>
                      {
                         
                           <tr key={op.operatorId}align="center">
                               <td>{op.operatorId}</td>
                               <td>{op.firstName}</td>
                               <td>{op.lastName}</td>
                               <td>{op.email}</td>
                               <td>{op.mobile}</td>
                               <td>{op.city}</td>
                            
                               
                           </tr>
                          
                            }
                             
                    </tbody>
              </table><br/>
              <Link to="/alloperator"> <button className="btn btn-warning">Back</button></Link>
          </div>
      );
    }
       
   }


function mapStateToProps(state) {
    return {
        getop : state.OperatorReducer.getop,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewOperatorById);