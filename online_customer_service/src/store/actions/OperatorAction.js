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