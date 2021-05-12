import axios from 'axios';
const OperatorURL="http://localhost:8889/operator";
export const AddIssueSucess=()=>{
    console.log("inside registrationSucess method");
    alert("Issue added successfully");
    //window.location.href="/";
    return{
        type:'ADD_SUCCESS'
    }
    
};
export const addIssue=(payload)=>{
    console.log("inside add department method");
    let data={
        
	issueType:payload.issueType,
	description:payload.description,
	issueStatus:payload.issueStatus,
	customerID:payload.customerID,
	operatorId:payload.operatorId,
 }
    return(dispatch)=>{
        return axios.post(OperatorURL+"/addCustomerIssue",data)
        .then(Response =>{
           // localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(AddIssueSucess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };

};
export const getIssueSuccess = (issue) => {
    console.log("inside getissueByCodeSuccess method");
    return {
        type : 'GET_ISSUEALL_SUCCESS',issue
    }
};
export const getIssues=()=>{
    console.log("Inside getIssues");
    return(dispatch)=>{
        return axios.get("http://localhost:8889/operator/allIssues")
        .then(Response=>{
            localStorage.setItem("issue",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getIssueSuccess(Response.data));
        })
    };
};
export const getissueByCodeSuccess = (opt) => {
    console.log("inside getissueByCodeSuccess method");
    return {
        type : 'GET_ISSUE_BY_CODE_SUCCESS',opt
    }
};
export const findIssueById = (payload) => {
    console.log("inside getIssueByCode method");
    return (dispatch)=> {
        return axios.get(OperatorURL+"/viewIssuesById",payload)
        .then(Response => {
            localStorage.setItem("opt",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getissueByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};
