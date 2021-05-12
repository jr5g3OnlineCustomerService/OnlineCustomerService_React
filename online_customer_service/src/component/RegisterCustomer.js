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
            password:''
        }
        this.custRegistration = this.custRegistration.bind(this);
    }
    custRegistration = (creg)=>{
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
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>Customer Registration Page</h1>
            <form>
                <div className="form-group">
                    <label>firstName</label>
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange}></input>

                    <label>lastName</label>
                    <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange}></input>
                    <label>email</label>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange}></input>
                    <label>mobile</label>
                    <input type="text" name="mobile" value={this.state.mobile} className="form-control" onChange={this.onChange}></input>
                    <label>city</label>
                    <input type="text" name="city" value={this.state.city} className="form-control" onChange={this.onChange}></input>
                    <label>Password</label>
                    <input type="text" name="password" value={this.state.password} className="form-control" onChange={this.onChange}></input>
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