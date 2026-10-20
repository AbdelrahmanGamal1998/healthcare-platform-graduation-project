
const initState =
{
    PatientProfileState:[],
    medicalHistory:[]
}

const PatientProfileReducer=(state=initState,action)=>
{

    switch(action.type)
    {
        case'fetshPatientProfileInfo':
        {
            return{PatientProfileState:action.payload.PatientProfileState,
                medicalHistory:action.payload.medicalHistory}
        }
       
        default:return state
    }

}

export default PatientProfileReducer;