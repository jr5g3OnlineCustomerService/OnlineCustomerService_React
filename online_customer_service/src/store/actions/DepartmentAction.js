import axios from 'axios';
const DepartmentURL="http://localhost:8889/admin";
export const AddDepartmentSucess=()=>{
    console.log("inside registrationSucess method");
    alert("Department added successfully");
    //window.location.href="/";
    return{
        type:'ADD_SUCCESS'
    }
};
export const addDept1=(payload)=>{
    console.log("inside add department method");
    let data={
        departmentName:payload.departmentName
    }
    return(dispatch)=>{
        return axios.post(DepartmentURL+"/addDepartment",data)
        .then(Response =>{
            localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(AddDepartmentSucess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };

};