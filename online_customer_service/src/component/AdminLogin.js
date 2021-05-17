import React, { Component } from 'react';
import Navbar from './Navbar';

class Adminlogin extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
        }
        this.saveUser=this.saveUser.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    saveUser=(u)=>{
    if(this.state.username===""){
        //alert("Please enter username");
        document.getElementById("text1").innerHTML="Enter Username".fontcolor("red");
    }
    else if(this.state.password===""){
       // alert("Please enter password");
       document.getElementById("text2").innerHTML="Enter Password".fontcolor("red");
    }
    if(this.state.username==="admin" && this.state.password==="admin"){
        window.location.href="/AdminHome";
    }
    }
    onChange=(user)=>this.setState({[user.target.name]:user.target.value});
    render(){
        return(
            <div class="main">
                <Navbar/>
        <section class="signup">
          
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="signup-form" class="signup-form">
                        <h2 class="form-title">Create account</h2>
                        
                        <div class="form-group">
                        <input type="text" class="form-input" name="username"value={this.state.username}onChange={this.onChange} placeholder="Email"></input>
                        </div>
                        <div class="form-group">
                        <input type="password" class="form-input" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"></input>
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