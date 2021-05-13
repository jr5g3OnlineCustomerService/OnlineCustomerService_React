const initialState={
    custlogin: undefined,
    customerReg: undefined,
    cust:[],
    sol:[]
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
                case 'GET_SOL_BY_CODE_SUCCESS':
                    return{
                        ...state,
                        cust:action.cust
                    }
                    case 'GET_SOLUTIONALL_SUCCESS':
                        return{
                            ...state,
                            sol:action.sol
                        };    
            default:
                return state
        }
    };