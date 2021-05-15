import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class OperatorLogin extends Component{
    constructor(props){
        super(props)
    }
render(){
    let data = sessionStorage.getItem('operatorId');
    
    debugger
    //alert(data);
    return(
        <div class="row">
            <div className="col-sm-8">
              <Link to="/viewChatissues"> <button className="btn btn-default">View Chat Issues</button></Link> 
            </div>

             <div className="col-sm-8">
              <Link to="/addIssue"> <button className="btn btn-default">Add Customer Isues</button></Link> 
            </div>

              <div className="col-sm-8">
              <Link to="/viewallissues"> <button className="btn btn-default">View All Issues</button></Link> 
            </div>

            <div className="col-sm-8">
              <Link to="/opchangepassword"> <button className="btn btn-default">Change Password</button></Link> 
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