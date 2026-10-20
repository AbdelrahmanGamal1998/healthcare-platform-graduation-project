
const initState=
{
    firstName:{},
    lastName:{},
    speciality:{},
    qualifications:{},
    imgo:{},
    dob:{},
    mail:{},
    age:{},
    address:{},
    experience:{},
    userName:{},
    DateI:{},
    DateII:{},
    DateIII:{}
    
   

}

const MoreInfoReducer=(state =initState,action)=>
{
    switch(action.type)
    {
        case 'fetshMoreInfo':
        {
            return{firstName:action.payload.moreInfo.allInfo.firstName,
            lastName:action.payload.moreInfo.allInfo.lastName,
            speciality:action.payload.moreInfo.allInfo.speciality,
            qualifications:action.payload.moreInfo.allInfo.qualifications,
            imgo:action.payload.moreInfo.allInfo.img,
            dob:action.payload.moreInfo.allInfo.dob,
            mail:action.payload.moreInfo.allInfo.mail,
            age:action.payload.moreInfo.allInfo.age,
            address:action.payload.moreInfo.allInfo.address,
            experience:action.payload.moreInfo.allInfo.experience,
            userName:action.payload.moreInfo.allInfo.userName,
            DateI:action.payload.moreInfo.allInfo.DateI,
            DateII:action.payload.moreInfo.allInfo.DateII,
            DateIII:action.payload.moreInfo.allInfo.DateIII



             }

        }
        default:return{state}
    }

}

export default MoreInfoReducer;