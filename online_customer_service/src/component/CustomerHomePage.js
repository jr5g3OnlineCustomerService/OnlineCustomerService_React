import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class CustomerHomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let data = sessionStorage.getItem('customerId');
        debugger;
        alert(data);
        return(
            <div class="row">
            <div className="col-sm-8"><Link to='/addChat'>
              <button className="btn btn-success" onClick={this.toAddChat} >Add Chat</button></Link>
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
   
    export default connect(mapStateToProps)(CustomerHomePage);