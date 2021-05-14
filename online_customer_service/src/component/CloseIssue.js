import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as IssueAction from '../store/actions/IssueAction';
import {bindActionCreators} from 'redux';

class CloseIssue extends Component{
   componentDidMount(){
       const {IssueAction, match} = this.props;
       IssueAction.closeissue(match.params.id);
   }
   render(){
       if(this.props.close !== undefined){
           window.location.href="/viewallissues";
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        close : state.IssueReducer.close,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        IssueAction : bindActionCreators(IssueAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(CloseIssue);