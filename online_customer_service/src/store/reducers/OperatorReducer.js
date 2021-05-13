const initialState={

    opt:[],
    deloperator:undefined,
    getop:[]
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
        default:
            return state
}
}