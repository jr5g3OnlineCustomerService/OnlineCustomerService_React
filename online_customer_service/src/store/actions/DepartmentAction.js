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
           // localStorage.setItem("register",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(AddDepartmentSucess());
        })
        .catch(Error=>{
            console.log("error");
            throw(Error);
        });
    };

};
export const getItemSuccess=(dept)=>{
    console.log("inside get department success method");
    //window.location.href="/getItem";
    return{
        type:'GET_ALL_ITEMS_SUCCESS',dept
    }
};
export const getDepartments=()=>{
    console.log("Inside getDepartments");
    return(dispatch)=>{
        return axios.get(DepartmentURL+"/allDepartments")
        .then(Response=>{
            localStorage.setItem("dept",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getItemSuccess(Response.data));
        })
    };
};

export const deleteItemSuccess=()=>{
    console.log("inside deleteItemSuccess method");
    return {
        type : 'ITEM_DELETED'
    }
};

export const deleteItem = (code) =>{
    console.log("inside deleteItem method");
    return (dispatch)=> {
        return axios.delete(DepartmentURL+"/deleteDepartment/"+code)
        .then(Response => {
            console.log("api call");
            dispatch(deleteItemSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getdeptByCodeSuccess = (dept) => {
    console.log("inside getdeptByCodeSuccess method");
    return {
        type : 'GET_DEPT_BY_CODE_SUCCESS',dept
    }
};

export const findDepById = (payload) => {
    console.log("inside getDepartmentByCode method");
    return (dispatch)=> {
        return axios.get(DepartmentURL+"/findDepartment",payload)
        .then(Response => {
            localStorage.setItem("dept",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getdeptByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};
export const editDeptSuccess=()=>{
    console.log("inside editItemSuccess method");
    return {
        type : 'DEPT_EDITED'
    }
};

export const modifydept = (payload) =>{
    console.log("inside modify department method");
    let data = {
        departmentID : payload.departmentID,
        departmentName : payload.departmentName
    }
    return (dispatch)=> {
        return axios.post(DepartmentURL+"/updateDepartment",data)
        .then(Response => {
            console.log("api call");
            dispatch(editDeptSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const editOptSuccess=()=>{
    console.log("inside EditOptSuccess method");
    return {
        type : 'OPT_EDITED'
    }
};

export const modifyOpt = (payload) =>{
    console.log("inside modify operator method");
    let data = {
        operatorId : payload.operatorId,
        firstName : payload.firstName,
        lastName : payload.lastName,
        email : payload.email,  
        city : payload.city,
        mobile : payload.mobile, 
        password : payload.password,   
        departmentID: payload.departmentID,
    }
    return (dispatch)=> {
        return axios.put(DepartmentURL+"/updateOperator",data)
        .then(Response => {
            console.log("api call");
            dispatch(editOptSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};














