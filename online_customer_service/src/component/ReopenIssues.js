import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';

class ReopenIssue extends Component{
   componentDidMount(){
       const {CustomerAction, match} = this.props;
       CustomerAction.reopenissue(match.params.id);
   }
   render(){
       if(this.props.open !== undefined){
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
           window.location.href="/viewallcustissue?Id="+customerId;
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        open : state.CustomerReducer.open,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        CustomerAction : bindActionCreators(CustomerAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ReopenIssue);