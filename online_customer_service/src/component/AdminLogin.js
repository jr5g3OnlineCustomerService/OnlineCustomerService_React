import React, { Component } from 'react';

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
            <body>
            <form className="form-group">
            <center>
            <h1>Login Page</h1>
            <label >Enter Username</label>
            <input type="text" name="username"value={this.state.username}onChange={this.onChange}></input>
            <b id="text1"></b><br/>
            <label>Enter Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.onChange}></input>
            <d id="text2"></d><br/>
            <input type="button"onClick={this.saveUser}value="login"></input>
            </center>
            </form>
            </body>
        );
    }
}
export default Adminlogin;