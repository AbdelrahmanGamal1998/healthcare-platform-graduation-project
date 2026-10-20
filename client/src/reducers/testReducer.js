
const initState ="amr";


const testReducer=(state=initState,action)=>
{
    switch(action.type)
    {
        case "loggedIn":
            state=action.payload;
            return state;
        
        default: return state; 
    }

    
}
 
export default testReducer;