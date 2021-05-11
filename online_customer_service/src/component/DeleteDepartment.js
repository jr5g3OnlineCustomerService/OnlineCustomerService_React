import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import {bindActionCreators} from 'redux';

class DeleteDepartment extends Component{
   componentDidMount(){
       const {DepartmentAction, match} = this.props;
       DepartmentAction.deleteItem(match.params.id);
   }
   render(){
       if(this.props.delitem !== undefined){
           this.props.history.push("/alldept");
       }
       return(
           <div></div>
       );
   }
}

function mapStateToProps(state) {
    return {
        delitem : state.DepartmentReducer.delitem,
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        DepartmentAction : bindActionCreators(DepartmentAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteDepartment);