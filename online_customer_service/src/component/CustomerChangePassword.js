import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CustomerAction from '../store/actions/CustomerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class CustomerChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            //customerId : props.location.state.operator.customerId,
            password : '',
        }
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    update= (e) =>{
        e.preventDefault();
        let payload = {
            //customerId : this.state.customerId,
            password : this.state.password,
        }
        this.props.CustomerAction.customerchangepassword(payload);
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
        window.location.href="/Customerhome?Id="+customerId;
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')
 
        
        return(
            <div>
			    <h1>CUSTOMER CHANGE PASSWORD PAGE </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Customer Id</label>
						<input type="text" name="customerId" className="form-control" value={customerId} onChange={this.onChange}  readOnly></input><br></br>
					    <label>Enter password</label>
						<input type="text" name="password" className="form-control" value={this.state.password} onChange={this.onChange}  required="required"></input><br></br>
					
                    </div>
						<button className="btn btn-success" onClick={this.update}>update password</button>
                        <Link to={`/Customerhome/${customerId}`}> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
        editpass : state.CustomerReducer.editpass,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        CustomerAction : bindActionCreators(CustomerAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(CustomerChangePassword);