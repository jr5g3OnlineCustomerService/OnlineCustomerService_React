import axios from 'axios';
const LOGINURL="http://localhost:8889/operator";

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
        return axios.post(LOGINURL+"/login",data)
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
        return axios.post(LOGINURL+"/addOperator",data)
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