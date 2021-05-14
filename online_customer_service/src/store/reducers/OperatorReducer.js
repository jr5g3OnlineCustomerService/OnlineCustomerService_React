const initialState={

    opt:[],
    deloperator:undefined,
    getop:[],
    byid:[],
    ctrname:[],
    ctrmail :[],
    editpass:undefined,
}

export default function OperatorReducer(state=initialState,action){
    switch(action.type){
       /* case 'ADD_SUCCESS':
                return{
                    ...state,
                    operator:action.operator
                };*/
                
        case 'GET_ALL_OPERATORS_SUCCESS':
                return{
                    ...state,
                    opt:action.opt
                };
         case 'OPERATOR_DELETED':
                return{
                    ...state,
                    deloperator : 'deleted'
                };
        case 'GET_OPERATOR_BY_CODE_SUCCESS' :
            return {
                ...state,
                getop : action.getop
        };
       case 'GET_CUSTOMER_BY_ID_SUCCESS' :
            return{
              ...state,
              byid : action.byid
        };
      case 'GET_CUSTOMER_BY_NAME_SUCCESS' :
            return{
             ...state,
              ctrname : action.ctrname
        };
       case 'GET_CUSTOMER_BY_EMAIL_SUCCESS' :
            return{
             ...state,
              ctrmail : action.ctrmail
        };
        case 'PASSWORD_EDITED':
            return{
                ...state,
                editpass:'edited'
            };
        default:
            return state
}
}
