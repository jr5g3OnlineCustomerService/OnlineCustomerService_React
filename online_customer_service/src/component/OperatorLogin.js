import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Redirect} from 'react-router-dom';
import OperatorHome from './OperatorHome';

class OperatorLogin extends Component{
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
        this.props.OperatorAction.loginValidate(payload);
        usr.preventDefault();

    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        let login=this.props.login;
        console.log("inside render method"+login);
        if(login!==undefined){
         // alert(login.email)
         debugger;
         sessionStorage.setItem('operatorId',login.operatorId);
         sessionStorage.setItem('password',login.password);
         // window.location.href="/viewallissues?Id="+login.operatorId;
         window.location.href="/operatorhome";
        }
        return(
        <div class="row">
            <div class="col-sm-4">
                <img src="login.png" width="100%"></img>
            </div>
            <div className="col-sm-8">
                <h1>Login Page</h1>
                <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.onChange}></input>
                <input type="text" name="password" placeholder="Password" value={this.state.password}  onChange={this.onChange}></input><br></br>
                <button className="btn btn-success" onClick={this.validation} style={{background:'#6C63FF'}}>Login</button>
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
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(OperatorLogin);


