import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CustomerAction from '../store/actions/CustomerAction'
import {Redirect} from 'react-router-dom';

class RegisterCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName : '',
            lastName : '',
            email :'',
            mobile:'',
            city:'',
            password:'',
            errors:{}
        }
        this.custRegistration = this.custRegistration.bind(this);
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
       this.setState({ errors })
       return formIsValid
}
    custRegistration = (creg)=>{
        creg.preventDefault();
        if(this.validation()){
        let payload = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            mobile:this.state.mobile,
            city:this.state.city,
            password:this.state.password
        }
        this.props.CustomerAction.registerCustomer(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>Customer Registration Page</h1>
            <form>
                <div className="form-group">
                    <label>firstName</label>
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.firstName}</div><br></br>

                    <label>lastName</label>
                    <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.lastName}</div><br></br>

                    <label>email</label>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.email}</div><br></br>

                    <label>mobile</label>
                    <input type="text" name="mobile" value={this.state.mobile} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.mobile}</div><br></br>
 
                    <label>city</label>
                    <input type="text" name="city" value={this.state.city} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.city}</div><br></br>

                    <label>Password</label>
                    <input type="text" name="password" value={this.state.password} className="form-control" onChange={this.onChange}></input>
                    <div>{this.state.errors.password}</div><br></br>
                </div>
                <button className="btn btn-sucess" onClick={this.custRegistration}>Click</button>
            </form>
        </div>
        ); 
    }
}
function mapStateToProps(state){
    return{
        customerReg : state.CustomerReducer.customerReg
    };
}
function mapDispatchToProps(dispatch){
    return{
        CustomerAction:bindActionCreators(CustomerAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterCustomer);
