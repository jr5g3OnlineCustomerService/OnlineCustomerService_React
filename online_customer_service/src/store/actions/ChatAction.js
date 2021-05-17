import axios from 'axios';
export const AddChatSuccess=()=>{
    console.log("inside Add chat success method");
    alert("Chat added successfully");
    //window.location.href="/";
    return{
        type:'CHAT_ADDED_SUCCESS'
    }
    
};
export const addChat=(payload)=>{
    console.log("inside add Chat method");
    let data={
        
    complaints:payload.complaints,
	firstName:payload.firstName,
	lastName:payload.lastName,
	email:payload.email,
    customerId:payload.customerId,
 }
    return(dispatch)=>{
        return axios.post("http://localhost:8889/customer/addComplaints",data)
        .then(Response =>{
           // localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(AddChatSuccess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };

};
export const getChatSuccess=(chat)=>{
    console.log("inside get Chat success method");
    //window.location.href="/getItem";
    return{
        type:'GET_ALL_CHATS_SUCCESS',chat
    }
};
export const getChatIssues=()=>{
    console.log("Inside get Chat Issues");
    return(dispatch)=>{
        return axios.get("http://localhost:8889/operator/viewChatIssue")
        .then(Response=>{
            localStorage.setItem("chat",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getChatSuccess(Response.data));
        })
    };
};