import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Redirect} from 'react-router-dom';
import OperatorHome from './OperatorHome';
import HomeNavBar from './HomeNavBar';

class OperatorLogin extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            errors:{}
        }
    }
    addValidate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.email)
       {
         formIsValid = false
         errors['email'] = '*Please enter this field'
       }
       if(!this.state.password)
       {
         formIsValid = false
         errors['password'] = '*Please enter this field'
       }
       this.setState({ errors })
       return formIsValid
   }
    validation=(usr)=>{
        usr.preventDefault();
        if(this.addValidate()){
        let payload={
            email:this.state.email,
            password:this.state.password
        }
        this.props.OperatorAction.loginValidate(payload);
    }

    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        let login=this.props.login;
        console.log("inside render method"+login);
        if(login!==undefined){
         // alert(login.email)
        
         sessionStorage.setItem('operatorId',login.operatorId);
         sessionStorage.setItem('password',login.password);
         sessionStorage.setItem('opfirstName',login.firstName);
         // window.location.href="/viewallissues?Id="+login.operatorId;
         window.location.href="/operatorhome";
        }
        return(
            <div class="main">
            <HomeNavBar/>
        <section class="signup">
        
        <div class="container">
            <div class="signup-content">
                <form method="POST" id="signup-form" class="signup-form">
                    <h2 class="form-title">Login</h2>
                    
                    <div class="form-group">
                    <input type="text" name="email"  class="form-input" placeholder="Email" value={this.state.email} onChange={this.onChange}></input>
                    <div class="red_color">{this.state.errors.email}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="password" name="password"  class="form-input" placeholder="Password" value={this.state.password} onChange={this.onChange}></input><br></br>
                   <div class="red_color">{this.state.errors.password}</div><br></br>
                        <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                    </div>
                    
                    
                    <div class="form-group">
                    <button className="form-submit" onClick={this.validation}>Login</button>
                    </div>
                </form>
                <p class="loginhere">
                    Dont have an account ? <a href="/operatorReg" class="loginhere-link">Register here</a>
                </p>
            </div>
        </div>
        </section>
        
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
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(OperatorLogin);


