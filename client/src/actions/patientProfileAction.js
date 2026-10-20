
import axios from 'axios';

export const patientProfileAction=()=>async(dispatch)=>
{
   
    const profileDataa = await axios.get('http://localhost:3000/Patient/showPatient',{withCredentials: true});
    const medicalDataa = await axios.get('http://localhost:3000/MedicalHistory/showMedical',{withCredentials: true});
   
    console.log(profileDataa);
    dispatch({
        type:'fetshPatientProfileInfo',
        payload:
        {
            PatientProfileState:profileDataa.data, medicalHistory:medicalDataa.data
        }
    });

    

}