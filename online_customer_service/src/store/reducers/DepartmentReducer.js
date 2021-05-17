const initialState={

    dept:[],
    delitem:undefined,
    deptid:undefined,
    editdept:undefined,
    editopt:undefined,
    optid:[],
    addept:undefined
}
export default function DepartmentReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_SUCCESS':
                return{
                    ...state,
                    addept:action.addept
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
        case 'GET_DEPT_BY_CODE_SUCCESS':
                return{
                    ...state,
                    dept:action.dept
    
                }
                case 'DEPT_EDITED' :
                    return {
                        ...state,
                        editdept : 'updated'
                    }
                    case 'OPT_EDITED' :
                        return {
                            ...state,
                            editopt : 'updated'
                        }  
        default:
            return state
}
}