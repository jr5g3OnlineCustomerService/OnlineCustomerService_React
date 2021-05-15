import axios from 'axios';
const CUSTLOGINURL="http://localhost:8889/customer";

export const loginSuccess=(custlogin)=>{
  console.log("inside login success");
  console.log(custlogin);
  return{
        type:'CUSTOMER_LOGIN_SUCCESS',custlogin
}
};
export const loginValidate=(payload) =>{
console.log("inside loginvalidate method");
let data={
  email:payload.email,
  password:payload.password
}
return(dispatch)=>{
    return axios.post(CUSTLOGINURL+"/login",data)
    .then(Response =>{
        localStorage.setItem("custlogin",JSON.stringify(Response.data));
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
      type:'CUST_REGN_SUCCESS'
  }
};
export const registerCustomer=(payload)=>{
  console.log("inside register user method");
  let data={
      firstName :payload.firstName,
      lastName : payload.lastName,
      email : payload.email,
      mobile:payload.mobile,
      city:payload.city,
      password:payload.password
  }
  return(dispatch)=>{
      return axios.post("http://localhost:8889/customer/addCustomer",data)
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

export const getSolByCodeSuccess = (cust) => {
    console.log("inside getSolByCodeSuccess method");
    return {
        type : 'GET_SOL_BY_CODE_SUCCESS',cust
    }
};

export const findSolById = (payload) => {
    console.log("inside getSolutionByCode method");
    return (dispatch)=> {
        return axios.get(CUSTLOGINURL+"/viewSolutionsById",payload)
        .then(Response => {
            localStorage.setItem("cust",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getSolByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const getSolutionSuccess = (sol) => {
    console.log("inside getissueByCodeSuccess method");
    return {
        type : 'GET_SOLUTIONALL_SUCCESS',sol
    }
};
export const getSolutions=()=>{
    console.log("Inside getSolutions");
    return(dispatch)=>{
        return axios.get("http://localhost:8889/customer/allSolutions")
        .then(Response=>{
            localStorage.setItem("issue",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getSolutionSuccess(Response.data));
        })
    };
};
export const editSuccess=()=>{
    console.log("inside edit Success method");
    alert("password updated");
    return {
        type : 'CUST_PASSWORD_EDITED'
    }
};

export const customerchangepassword = (payload) =>{
    console.log("inside change password method");
    let data = {
        customerId : payload.customerId,
        password : payload.password
    }
    return (dispatch)=> {
        return axios.put(CUSTLOGINURL+"/ChangePassword",data)
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