const initialState={

    issue:[],
    opt:undefined,
    //addIssue:[]
}
export default function IssueReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_SUCCESS':
                return{
                    ...state,
                    addIssue:action.addIssue
                };
	case 'GET_ISSUEALL_SUCCESS':
                return{
                    ...state,
                    issue:action.issue
                };
	 case 'GET_ISSUE_BY_CODE_SUCCESS':
                return{
                    ...state,
                    opt:action.opt
                };
                default:
                return state
}
}