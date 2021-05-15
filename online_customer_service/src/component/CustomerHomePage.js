import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CustomerAction from '../store/actions/CustomerAction';

class CustomerHomePage extends Component{
    constructor(props){
        super(props)
    }
    toAddChat=()=>{
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')

        window.location.href="/addChat?Id="+customerId;
        };
        toChangePassword=()=>{
            let search=window.location.search;
            let params=new URLSearchParams(search);
            let customerId=params.get('Id')
    
            window.location.href="/custchangepassword?Id="+customerId;
            };
        toViewAllIssue=()=>{
            let search=window.location.search;
            let params=new URLSearchParams(search);
            let customerId=params.get('Id')
        
            window.location.href="/viewallcustissue?Id="+customerId;
                };
    render(){
         
        return(
            <div class="row">
            <div className="col-sm-8">
              <button className="btn btn-success" onClick={this.toAddChat} >Add Chat</button>
          </div>
          <div className="col-sm-8">
              <button className="btn btn-success" onClick={this.toChangePassword} >Change Password</button>
          </div>
          <div className="col-sm-8">
              <button className="btn btn-success" onClick={this.toViewAllIssue} >View All Issues</button>
          </div>
      </div>
        ); 
    }
}
function mapStateToProps(state){
    return{
      custlogin: state.CustomerReducer.custlogin
      };
    }
    function mapDispatchToProps(dispatch){
    return{
    CustomerAction: bindActionCreators(CustomerAction,dispatch)
       };
    }
    export default connect(mapStateToProps,mapDispatchToProps)(CustomerHomePage);