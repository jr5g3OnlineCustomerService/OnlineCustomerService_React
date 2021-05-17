const initialState={

    chat:[],
    addchat:undefined,
}
export default function ChatReducer(state=initialState,action){
    switch(action.type){
        case 'CHAT_ADDED_SUCCESS':
            return{
                ...state,
                addchat : 'added'
            
            };
           case 'GET_ALL_CHATS_SUCCESS':
                return{
                    ...state,
                    chat : action.chat
                };
            default:
                return state
        }
    };