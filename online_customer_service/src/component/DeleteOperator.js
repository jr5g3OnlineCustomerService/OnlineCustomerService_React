import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';

class DeleteOperator extends Component{
   componentDidMount(){
       const {OperatorAction, match} = this.props;
       OperatorAction.deleteoperator(match.params.id);
   }
   render(){
       if(this.props.deloperator !== undefined){
           this.props.history.push("/alloperator");
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        deloperator : state.OperatorReducer.deloperator,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteOperator);