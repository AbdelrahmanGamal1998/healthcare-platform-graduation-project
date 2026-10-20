
const initState=
{
    docListInfo:[],

}

const DocListReducer=(state =initState,action)=>
{
    switch(action.type)
    {
        case 'fetshDocListInfo':
        {
            return{...state,docListInfo:action.payload.docListInfo}

        }
        default:return{...state}
    }

}

export default DocListReducer;