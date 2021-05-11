import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as OperatorAction from '../store/actions/OperatorAction'
import {Redirect} from 'react-router-dom';

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
            departmentID:0
        }
        this.registration = this.registration.bind(this);
    }
    registration = (reg)=>{
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
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>Login Page</h1>
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
                    <label>departmentID</label>
                    <input type="text" name="departmentID" value={this.state.departmentID} className="form-control" onChange={this.onChange}></input>
                </div>
                <button className="btn btn-sucess" onClick={this.registration}>Click</button>
            </form>
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