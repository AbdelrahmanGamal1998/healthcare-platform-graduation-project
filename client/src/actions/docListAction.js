import axios from 'axios';

export const loadDocList =()=> async(dispatch)=>
{
    const docList = await axios.get('http://localhost:3000/DoctorList/getDoctors');

    dispatch({

        type:"fetshDocListInfo",
        payload: 
        {
            docListInfo:docList.data,
        }

    });
}