import React,{ Component } from 'react';


class CustomerHomePage extends Component{
    constructor(props){
        super(props)
    }
    toAddChat=()=>{
        let search=window.location.search;
        let params=new URLSearchParams(search);
        let customerId=params.get('Id')

        window.location.href="/addChat?Id="+customerId;
        };
        toChangePassword=()=>{
            let search=window.location.search;
            let params=new URLSearchParams(search);
            let customerId=params.get('Id')
    
            window.location.href="/custchangepassword?Id="+customerId;
            };
    render(){
        return(
            <div class="row">
            <div className="col-sm-8">
              <button className="btn btn-success" onClick={this.toAddChat} >Add Chat</button>
          </div>
          <div className="col-sm-8">
              <button className="btn btn-success" onClick={this.toChangePassword} >Change Password</button>
          </div>
      </div>
        ); 
    }
}
export default(CustomerHomePage);