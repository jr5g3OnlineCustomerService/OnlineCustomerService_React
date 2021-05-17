import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';

class ViewCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            customerId:0,
            firstName : '',
            email :''
        }
        this.onChange=this.onChange.bind(this);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
        <div>
            <h1>View Customer Page</h1>
            <form>
                <div className="form-group">
                <label>customer_Id</label>
                    <input type="text" name="customerId" value={this.state.customerId} className="form-control" onChange={this.onChange}></input>
                    <Link to={`/viewcustByid/${this.state.customerId}`}><button className="btn btn-danger">ViewById</button></Link><br></br>
                    <br></br>
                    <label>firstName</label>
                    <input type="text" name="firstName" value={this.state.firstName} className="form-control" onChange={this.onChange}></input>
                    <Link to={`/viewcustByname/${this.state.firstName}`}><button className="btn btn-danger">ViewByName</button></Link><br></br>
                    <br></br>
                    <label>email</label>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.onChange}></input>
                    <Link to={`/viewcustByemail/${this.state.email}`}><button className="btn btn-danger">ViewByEmail</button></Link><br></br>
                    
                  
                </div>
                    
             </form>
        </div>
        ); 
    }
}


function mapStateToProps(state) {
    return {
        view : state.OperatorReducer.view
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewCustomer);