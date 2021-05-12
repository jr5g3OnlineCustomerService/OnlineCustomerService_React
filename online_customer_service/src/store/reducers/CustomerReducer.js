const initialState={
    custlogin: undefined,
    customerReg: undefined
}
export default function CustomerReducer(state=initialState,action){
    switch(action.type){
        case 'CUSTOMER_LOGIN_SUCCESS':
            return{
                ...state,
                custlogin : action.custlogin
            
            };
            case 'CUST_REGN_SUCCESS':
                return{
                    ...state,
                    customerReg : action.customerReg
                };
            default:
                return state
        }
    };