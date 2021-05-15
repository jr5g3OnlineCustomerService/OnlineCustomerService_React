import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Redirect} from 'react-router-dom';

class OperatorLogin extends Component{
    constructor(props){
        super(props)
    }
render(){
    let data = sessionStorage.getItem('logindata');
    debugger
    alert(data);
    return(
        <div class="row">
              <div className="col-sm-8">
                <button><a href="/viewallissues"><span class="glyphicon glyphicon-user"></span>View All Issue</a></button>
            </div>
        </div>

    );
}

}
function mapStateToProps(state){
    return{
       login : state.OperatorReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return{
        //OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
//export default(OperatorLogin);
export default connect(mapStateToProps,mapDispatchToProps)(OperatorLogin);