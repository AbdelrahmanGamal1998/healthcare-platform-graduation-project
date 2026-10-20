
import axios from 'axios';

export const docProfileAction=()=>async(dispatch)=>
{
   
    const profileDataa = await axios.get('http://localhost:3000/Doctor/showDoctor',{withCredentials: true}
    );
   
    console.log(profileDataa);
    dispatch({
        type:'fetshProfileInfo',
        payload:
        {
            profileState:profileDataa.data,
        }
    });

}