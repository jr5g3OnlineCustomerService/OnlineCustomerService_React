import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Redirect} from 'react-router-dom';
import Navbar from './Navbar';

class OperatorRegisteration extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : '',
            lastName : '',
            email :'',
            mobile:'',
            city:'',
            password:'',
            departmentID:0,
            errors:{}
        }
        this.registration = this.registration.bind(this);
    }
    validation = () =>{
        let errors = {}
        let formIsValid = true
        if(!this.state.firstName)
        {
             formIsValid = false
             errors['firstName']='*Please enter this field'
        }
        if(!this.state.lastName)
        {
             formIsValid = false
             errors['lastName']='*Please enter this field'
        }
        if(!this.state.email)
        {    
             formIsValid = false
             errors['email']='*Please enter this field'
        }
        if(!this.state.mobile)
        {    
             formIsValid = false
             errors['mobile']='*Please enter this field'
        }
        if(!this.state.city)
        {    
             formIsValid = false
             errors['city']='*Please enter this field'
        }
        if(!this.state.password)
        {   
             formIsValid = false
             errors['password']='*Please enter this field'
         }
         if(!this.state.departmentID)
        {   
             formIsValid = false
             errors['departmentID']='*Please enter this field'
         }
         this.setState({ errors })
         return formIsValid
  }
    registration = (reg)=>{
        reg.preventDefault();
        if(this.validation()){
        let payload = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            password:this.state.password,
            departmentID:this.state.departmentID
        }
        this.props.OperatorAction.registerUser(payload);
    }
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
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
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange} placeholder="First Name"></input>
                    <div>{this.state.errors.firstName}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange} placeholder="Last Name"></input>
                    <div>{this.state.errors.lastName}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange} placeholder="Email"></input>
                    <div>{this.state.errors.email}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="mobile" value={this.state.mobile} className="form-control" onChange={this.onChange} placeholder="Mobile"></input>
                    <div>{this.state.errors.mobile}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="city" value={this.state.city} className="form-control" onChange={this.onChange} placeholder="City"></input>
                    <div>{this.state.errors.city}</div><br></br>
                    </div>
                    <div class="form-group">
                    <input type="text" name="password" value={this.state.password} className="form-control" onChange={this.onChange} placeholder="Password"></input>
                    <div>{this.state.errors.password}</div><br></br>
                    </div>
                    
                    
                    <div class="form-group">
                    <input type="text" name="departmentID" value={this.state.departmentID} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.departmentID}</div><br></br>
                    </div>
                    
                    <div class="form-group">
                    <button className="form-submit" onClick={this.registration}>Register</button>
                    </div>
                </form>
                <p class="loginhere">
                         Already have an account ? <a href="/oplogin" class="loginhere-link">Login here</a>
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
        register : state.LoginReducer.register
    };
}
function mapDispatchToProps(dispatch){
    return{
        OperatorAction:bindActionCreators(OperatorAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(OperatorRegisteration);