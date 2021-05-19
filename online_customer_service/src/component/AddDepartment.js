import React,{ Component,Redirect } from 'react';
import {connect} from 'react-redux';
import * as DepartmentAction from '../store/actions/DepartmentAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
class AddDepartment extends Component{
    constructor(props){
        super(props)
        this.state={
            departmentName:'',
            errors:{}
        }
        this.addDept=this.addDept.bind(this);
    }
    validate = () => {
        let errors = {}
        let formIsValid = true
        if(!this.state.departmentName)
        {
            formIsValid = false
            errors['departmentName'] = '*Please enter this field '
        }
        this.setState({ errors })
        return formIsValid
   }
    addDept=(add)=>{    
        add.preventDefault();
        if(this.validate()){
        let payload={
            departmentName:this.state.departmentName  
        }
        this.props.DepartmentAction.addDept1(payload);
        }
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
render(){
    let dept=this.props.addDept;
    if(this.dept!==undefined){
        alert("Department added Successfully");
    }
    return(
        
    <div class="App">
        <Navbar/>
        <h1>AddDepartment</h1>
        <form>
                <h4>Departmentname</h4>
                <input type="text" name="departmentName" value={this.state.departmentName} className="form-control" onChange={this.onChange} style={{width:"200px",display:"inline-block"}}></input>
                <div class="red_color">{this.state.errors.departmentName}</div><br></br>
            <button className="btn btn-success" onClick={this.addDept}>AddItems</button>
            <Link to="/AdminHome"> <button className="btn btn-warning">Back</button></Link>
        </form>
        
    </div>
    );
}
}
function mapStateToProps(state){
    return{
        addept: state.DepartmentReducer.addept
    };
}
function mapDispatchToProps(dispatch){
    return{
        DepartmentAction:bindActionCreators(DepartmentAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(AddDepartment);