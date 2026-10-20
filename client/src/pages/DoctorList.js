import { useEffect, useRef } from "react";
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import DocCard from '../components/docCard';
import {useDispatch,useSelector} from 'react-redux';
import {loadDocList} from '../actions/docListAction';
import CardMoreInfo from '../components/cardMoreInfo';


const DocList = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
  
      dispatch(loadDocList());
       
    },[dispatch]);

   const {docListInfo}=useSelector((state)=>state.docList);

   const toggle=useSelector((state)=>state.toggle);

   

    return (

       
            <DocWrapper style={{overflowY: toggle==true ?'hidden' : 'scroll'}} >

                {(toggle&&
                <CardMoreInfo/>
                )}

                

            


                
                <HomeNav />
                <ContentWrapper>

                    {
                        docListInfo.map((doc)=>(

                            <DocCard id={doc._id} firstName={doc.firstName} lastName={doc.lastName} speciality={doc.doctorSpecialty}
                             qualifications={doc.qualifications}  img={doc.doctorImage} mail={doc.email} dob={doc.dob} age={doc.age}
                             address={doc.clinicAddress} experience={doc.experience} userName={doc.userName}
                             DateI={doc.DateI}  DateII={doc.DateII}  DateIII={doc.DateIII}  rating={doc.rating}/>                        
                             
                        ))
                    }


                </ContentWrapper>
            </ DocWrapper>
        



    );
}

export default DocList;

const DocWrapper = styled.div`

height:100vh;
width: 100%;
background-color:#F8F8FF;
padding-bottom: 2rem;
overflow: hidden;

`

const ContentWrapper = styled.div`

min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 10rem;

`