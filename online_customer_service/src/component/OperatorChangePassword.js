import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as OperatorAction from '../store/actions/OperatorAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class OperatorChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            operatorId : sessionStorage.getItem('operatorId'),
            password :  sessionStorage.getItem('password'),
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    update= (e) =>{
        e.preventDefault();
        let payload = {
            operatorId : this.state.operatorId,
            password : this.state.password,
        }
        this.props.OperatorAction.changepassword(payload);
      
        window.location.href="/operatorhome";
       
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        
        return(
            <div>
			    <h1> OPERATOR CHANGE PASSWORD PAGE </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Operator Id</label>
						<input type="text" name="operatorId" className="form-control" value={this.state.operatorId} onChange={this.onChange}  readOnly></input><br></br>
					    <label>Enter password</label>
						<input type="text" name="password" className="form-control" value={this.state.password} onChange={this.onChange}  required="required"></input><br></br>
					
                    </div>
						<button className="btn btn-success" onClick={this.update}>update password</button>
                        <Link to="/operatorhome"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
        editpass : state.OperatorReducer.editpass,
       };
   }
   function mapDispatchToProps(dispatch){
    return {
        OperatorAction : bindActionCreators(OperatorAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(OperatorChangePassword);