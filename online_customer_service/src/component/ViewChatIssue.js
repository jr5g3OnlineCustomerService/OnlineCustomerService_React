import React,{ Component} from 'react';
import {connect} from 'react-redux';
import * as ChatAction from '../store/actions/ChatAction';
import { bindActionCreators } from 'redux';

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
        <table className="table-bordered table-dark" align="center" width="50%" border="1">
            
            <thead>
                <tr>
                    <th>CHAT CODE</th>
                    <th>CHAT DATE</th>
		            <th>CHAT COMPLAINTS</th>
		            <th>FIRST NAME</th>
		            <th>LAST NAME</th>
                    <th>EMAIL</th>
                    
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
                        

                       
                     </tr>
                    
                      )}
                       
              </tbody>
        </table><br/>
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