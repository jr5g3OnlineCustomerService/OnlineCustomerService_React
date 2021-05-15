import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Redirect} from 'react-router-dom';

class OperatorLogin extends Component{
    constructor(props){
        super(props)
    }
render(){

    return(
        <div class="row">
              <div className="col-sm-8">
                <li><a href="/viewallissues"><span class="glyphicon glyphicon-user"></span>View All Issue</a></li>
            </div>
        </div>

    );
}

}
export default(OperatorLogin);