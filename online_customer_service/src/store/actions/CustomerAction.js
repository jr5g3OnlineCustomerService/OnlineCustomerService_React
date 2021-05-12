import axios from 'axios';
const CUSTLOGINURL="http://localhost:8889/customer";

export const loginSuccess=(login)=>{
  console.log("inside login success");
  console.log(login);
  return{
        type:'CUSTOMER_LOGIN_SUCCESS',login
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
      return axios.post(CUSTLOGINURL+"/addCustomer",data)
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