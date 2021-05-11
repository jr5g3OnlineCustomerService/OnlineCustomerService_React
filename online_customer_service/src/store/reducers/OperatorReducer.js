const initialState={

    operator:[],
    delitem:undefined
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
                    operator:action.operator
                };
         case 'OPERATOR_DELETED':
                return{
                    ...state,
                    deloperator : 'deleted'
                };
        default:
            return state
}
}