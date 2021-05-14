import axios from 'axios';
const OperatorURL="http://localhost:8889/operator";

export const loginSuccess=(login)=>{
    console.log("inside login success");
    console.log(login);
    return{
        type:'LOGIN_SUCCESS',login
    }
};
export const loginValidate=(payload) =>{
    console.log("inside login validate");
    let data={
        email:payload.email,
        password:payload.password
    }
    return(dispatch)=>{
        return axios.post(OperatorURL+"/login",data)
        .then(Response =>{
            localStorage.setItem("login",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(loginSuccess(Response.data));
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};

export const registrationSucess=()=>{
    console.log("inside registrationSucess method");
    alert("User registered successfully");
    window.location.href="/";
    return{
        type:'REGN_SUCCESS'
    }
};
export const registerUser=(payload)=>{
    console.log("inside register user method");
    let data={
        firstName :payload.firstName,
        lastName : payload.lastName,
        email : payload.email,
        mobile:payload.mobile,
        city:payload.city,
        password:payload.password,
        departmentID:payload.departmentID
    }
    return(dispatch)=>{
        return axios.post(OperatorURL+"/addOperator",data)
        .then(Response =>{
            //localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(registrationSucess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };

};
export const getOptSuccess=(opt)=>{
    console.log("inside get operator success method");
    //window.location.href="/getItem";
    return{
        type:'GET_ALL_OPERATORS_SUCCESS',opt
    }
};
export const getOperators=()=>{
    console.log("Inside getOperators");
    return(dispatch)=>{
        return axios.get("http://localhost:8889/admin/allOperators")
        .then(Response=>{
            localStorage.setItem("opt",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getOptSuccess(Response.data));
        })
    };
};
export const deleteOperatorSuccess=()=>{
    console.log("inside deleteOperatorSuccess method");
    return {
        type : 'OPERATOR_DELETED'
    }
};

export const deleteoperator = (code) =>{
    console.log("inside delete operator method");
    return (dispatch)=> {
        return axios.delete("http://localhost:8889/admin/deleteOperator/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(deleteOperatorSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getOpByCodeSuccess = (getop) => {
    console.log("inside getItemByCodeSuccess method");
    return {
        type : 'GET_OPERATOR_BY_CODE_SUCCESS',getop
    }
};

export const viewopbyid = (code) => {
    console.log("inside getItemByCode method");
    return (dispatch)=> {
        return axios.get("http://localhost:8889/admin/findOperator/"+code)
        .then(Response => {
            localStorage.setItem("getop",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getOpByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const AddSolutionSuccess=()=>{
	console.log("inside addSolution method");
	alert("Solution added successfully");
	return{
		type:'ADD_SUCCESS'
	}
};

export const addSol1= (payload)=>{
	console.log("inside addSolution method");
	let data={
		solutionDescription:payload.solutionDescription,
                issueId:payload.issueId,
                operatorId:payload.operatorId
	}
	return(dispatch)=>{
		return axios.post(OperatorURL+"/addSolution",data)
  .then(Response =>{
           // localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(AddSolutionSuccess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };
};
export const getCustomerByIdSuccess = (byid) => {
    console.log("inside getItemByCodeSuccess method");
    return {
        type : 'GET_CUSTOMER_BY_ID_SUCCESS',byid
    }
};

export const viewCustById = (id) => {
    console.log("inside viewCustById method");
    return (dispatch)=> {
        return axios.get("http://localhost:8889/operator/findCustomerById/"+id)
        .then(Response => {
            localStorage.setItem("byid",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCustomerByIdSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const getCustomerByNameSuccess = (ctrname) => {
    console.log("inside getItemByNameSuccess method");
    return {
        type : 'GET_CUSTOMER_BY_NAME_SUCCESS',ctrname
    }
};

export const viewCustByName = (name) => {
    console.log("inside viewCustByName method");
    return (dispatch)=> {
        return axios.get("http://localhost:8889/operator/findCustomerByName/"+name)
        .then(Response => {
            localStorage.setItem("ctrname",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCustomerByNameSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const getCustomerByEmailSuccess = (ctrmail) => {
    console.log("inside getItemByEmailSuccess method");
    return {
        type : 'GET_CUSTOMER_BY_EMAIL_SUCCESS',ctrmail
    }
};

export const viewCustByEmail = (email) => {
    console.log("inside viewCustByEmail method");
    return (dispatch)=> {
        return axios.get("http://localhost:8889/operator/findCustomerByEmail/"+email)
        .then(Response => {
            localStorage.setItem("ctrmail",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCustomerByEmailSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};
export const editSuccess=()=>{
    console.log("inside edit Success method");
    alert("password updated");
    return {
        type : 'PASSWORD_EDITED'
    }
};

export const changepassword = (payload) =>{
    console.log("inside change password method");
    let data = {
        operatorId : payload.operatorId,
        password : payload.password
    }
    return (dispatch)=> {
        return axios.put(OperatorURL+"/ChangePassword",data)
        .then(Response => {
            console.log("api call");
            dispatch(editSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};
