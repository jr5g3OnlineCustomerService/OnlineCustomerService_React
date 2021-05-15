import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {Redirect} from 'react-router-dom'; 

class CustomerLogin extends Component {
constructor(props){
super(props)
this.state={
       email:'',
       password:''
       }
}
    validation=(usr)=>{
    let payload={
       email:this.state.email,
       password:this.state.password
    }
      this.props.CustomerAction.loginValidate(payload);
      usr.preventDefault();
}
onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    let login=this.props.custlogin;
    console.log("inside render method"+login);
    if(login!==undefined){
      debugger;
      sessionStorage.setItem('customerId',login.customerId);
      sessionStorage.setItem('password',login.password);
      sessionStorage.setItem('firstName',login.firstName);
      sessionStorage.setItem('lastName',login.lastName);
      sessionStorage.setItem('email',login.email);
      window.location.href="/Customerhome";
    }
return(
<div class="row">
            <div class="col-sm-4">
                <img src="login.png" width="100%"></img>
            </div>
            <div className="col-sm-8">
          <h1>Customer Login Page</h1>
         <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}></input>
         <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange}></input><br></br>
         <button className="btn btn-success" onClick={this.validation} style={{background:'#6C63FF'}}>Login</button>
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
export default connect(mapStateToProps,mapDispatchToProps)(CustomerLogin);