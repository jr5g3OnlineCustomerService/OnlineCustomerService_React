const initialState={

    dept:[],
    delitem:undefined
}
export default function DepartmentReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_SUCCESS':
                return{
                    ...state,
                    dept:action.dept
                };
                
        case 'GET_ALL_ITEMS_SUCCESS':
                return{
                    ...state,
                    dept:action.dept
                };
         case 'ITEM_DELETED':
                return{
                    ...state,
                    delitem : 'deleted'
                };
        default:
            return state
}
}