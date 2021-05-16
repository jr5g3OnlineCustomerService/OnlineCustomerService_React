import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatAction from '../store/actions/ChatAction';
import {Link} from 'react-router-dom';

class AddChat extends Component{
    constructor(props){
        super(props)
        this.state={
            complaints:'',
            firstName : sessionStorage.getItem('firstName'),
            lastName : sessionStorage.getItem('lastName'),
            email :sessionStorage.getItem('email'),
            customerId:sessionStorage.getItem('customerId'),
        }
        this.add = this.add.bind(this);
    }
    add = (reg)=>{
        let payload = {
            complaints : this.state.complaints,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email:this.state.email,
            customerId:this.state.customerId,
        }
        this.props.ChatAction.addChat(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>Chat Page</h1>
            <form>
                <div className="form-group">
                <label>complaints</label>
                    <input type="text" name="complaints" value={this.state.complaints} className="form-control" onChange={this.onChange}></input>
                    <label>firstName</label>
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange}></input>
                    <label>lastName</label>
                    <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange}></input>
                    <label>email</label>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange}></input>
                    <label>customerId</label>
                    <input type="text" name="customerId" value={this.state.customerId} className="form-control" onChange={this.onChange}></input>
                </div>
                <button className="btn btn-sucess" onClick={this.add}>Click</button>
            </form>
            <Link to="/Customerhome">   <button className="btn btn-success" style={{background:'#6C63FF'}}>Back To Customer Home Page</button>
   </Link>
        </div>
        ); 
    }
}
function mapStateToProps(state){
    return{
        addchat : state.ChatReducer.addchat
    };
}
function mapDispatchToProps(dispatch){
    return{
        ChatAction:bindActionCreators(ChatAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddChat);