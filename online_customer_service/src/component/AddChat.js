import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChatAction from '../store/actions/ChatAction';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class AddChat extends Component{
    constructor(props){
        super(props)
        this.state={
            complaints:'',
            firstName : sessionStorage.getItem('firstName'),
            lastName : sessionStorage.getItem('lastName'),
            email :sessionStorage.getItem('email'),
            customerId:sessionStorage.getItem('customerId'),
            errors :{}
        }
        this.add = this.add.bind(this);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.complaints)
        {
            formIsValid = false
            errors['complaints'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.firstName)
        {
            formIsValid = false
            errors['firstName'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.lastName)
        {
            formIsValid = false
            errors['lastName'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.customerId)
        {
            formIsValid = false
            errors['customerId'] = '*Please enter this field '
        }
        this.setState({ errors })
        if(!this.state.email)
        {
            formIsValid = false
            errors['email'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
    add = (reg)=>{
        reg.preventDefault();
        if(this.validate()){
        let payload = {
            complaints : this.state.complaints,
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email:this.state.email,
            customerId:this.state.customerId,
        }
        this.props.ChatAction.addChat(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div class="App">
            <Navbar/>
            <h1>Chat Page</h1>
            <form>
               
                <label>Complaints </label>
                    <input type="text" name="complaints" value={this.state.complaints} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                    <div class="red_color">{this.state.errors.complaints}</div><br></br>

                    <label>FirstName </label>
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}} readOnly></input>
                    <div class="red_color">{this.state.errors.firstName}</div><br></br>
                  
                    <label>LastName </label>
                    <input type="text" name="lastName" value={this.state.lastName} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}} readOnly></input>
                    <div class="red_color">{this.state.errors.lastName}</div><br></br>
                   
                    <label>Email </label>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}} readOnly></input>
                    <div class="red_color">{this.state.errors.email}</div><br></br>
                    
                    <label>CustomerId </label>
                    <input type="text" name="customerId" value={this.state.customerId} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}} readOnly></input>
                    <div class="red_color">{this.state.errors.customerId}</div><br></br>
                
                
                <button className="btn btn-success" onClick={this.add}>Submit</button>
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