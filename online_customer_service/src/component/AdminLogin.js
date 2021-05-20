import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';

class Adminlogin extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{},
        }
        this.saveUser=this.saveUser.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    addValidate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.username)
       {
         formIsValid = false
         errors['username'] = '*Please enter this field'
       }
       if(!this.state.password)
       {
         formIsValid = false
         errors['password'] = '*Please enter this field'
       }
       this.setState({ errors })
       return formIsValid
   }
    saveUser=(usr)=>{
        usr.preventDefault();
        if(this.addValidate()){
    if(this.state.username==="admin" && this.state.password==="admin"){
        window.location.href="/AdminHome";
    }
    
    }
}
    onChange=(user)=>this.setState({[user.target.name]:user.target.value});
    render(){
        return(
            <div class="main">
                <HomeNavBar/>
        <section class="signup">
          
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="signup-form" class="signup-form">
                        <h2 class="form-title">Create account</h2>
                        
                        <div class="form-group">
                        <input type="text" class="form-input" name="username"value={this.state.username}onChange={this.onChange} placeholder="Email" required></input>
                        <div class="red_color">{this.state.errors.username}</div><br/></div>
                        <div class="form-group">
                        <input type="password" class="form-input" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required></input>
                        <div class="red_color">{this.state.errors.password}</div><br/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        
                        
                        <div class="form-group">
                        <input type="button"onClick={this.saveUser}value="login" class="form-submit"></input>
                        </div>
                    </form>
                   
                </div>
            </div>
        </section>

    </div>

        );
    }
}
export default Adminlogin;