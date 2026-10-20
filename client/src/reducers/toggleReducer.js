
const initState =false;

const Toggle=(state =initState,action)=>
{
    switch(action.type)
    {
        case 'clicked':
        {
            state=!state;
            return state;

        }
        default: return state;
    }
}

export default Toggle;
