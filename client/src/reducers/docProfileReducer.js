
const initState =
{
    profileState:[],
}

const DocProfileReducer=(state=initState,action)=>
{

    switch(action.type)
    {
        case'fetshProfileInfo':
        {
            return{profileState:action.payload.profileState}
        }
        default:return state
    }

}

export default DocProfileReducer;