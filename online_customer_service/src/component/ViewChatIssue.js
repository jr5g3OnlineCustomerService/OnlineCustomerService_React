import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as ChatAction from '../store/actions/ChatAction';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

class ViewChatIssue extends Component{
  /* constructor(props){
        super(props)
    }*/
componentDidMount(){
    this.props.ChatAction.getChatIssues()
}
render()
{
    let stock=this.props.chat;
    return(
        <div>
        <h1>Chat</h1>
        <table className="table table-hover" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>CHAT CODE</th>
                    <th>CHAT DATE</th>
		            <th>CHAT COMPLAINTS</th>
		            <th>FIRST NAME</th>
		            <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>CUSTOMER ID</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    stock.map(ch=>
                     <tr key={ch.chatId}align="center">
                         <td>{ch.chatId}</td>
                         <td>{ch.chatDate}</td>
                         <td>{ch.complaints}</td>
                         <td>{ch.firstName}</td>
                         <td>{ch.lastName}</td>
                         <td>{ch.email}</td>
                         <td>{ch.customer.customerId}</td>
                        

                       
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
        <Link to="/operatorhome">
                <button className="btn btn-success" style={{background:'#6C98FF'}}>Back </button>
                </Link>
    </div>
);
}
}
function mapStateToProps(state){
    return{
        chat:state.ChatReducer.chat
    };
}
function mapDispatchToProps(dispatch){
    return{
        ChatAction:bindActionCreators(ChatAction,dispatch)
    };

}
export default connect(mapStateToProps,mapDispatchToProps)(ViewChatIssue);