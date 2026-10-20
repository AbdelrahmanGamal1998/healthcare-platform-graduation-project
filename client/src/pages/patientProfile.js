import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import docProfile from '../imgs/jeff.jpg';
import {Button} from 'react-bootstrap';
import lottie from 'lottie-web';
import { useEffect, useRef } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {patientProfileAction} from '../actions/patientProfileAction';
import {Link} from 'react-router-dom';
const PatientProfile=()=>
{
    const dispatch=useDispatch();
    useEffect(()=>{
  
      dispatch(patientProfileAction());
       
    },[dispatch]);

    const {PatientProfileState}=useSelector((state)=>state.patientProfile);
    const {medicalHistory}=useSelector((state)=>state.patientProfile);

    console.log(PatientProfileState,medicalHistory);


    const container = useRef(null);
    useEffect(() => {
  
      lottie.loadAnimation({
        container: container.current,
        loop: true,
        autoPlay: true,
        animationData: require('../hospital.json')
  
      })
  
    }, [])
  

    return(

        

        <DocContainer>
            <HomeNav/>

            <ContentWrapper>
                <ProfileContainer>

                    <LeftSide>

                        <ImgContainer>

                        <img src={`http://localhost:3001/uploads/${PatientProfileState.Image}`}/>
                        <p>{PatientProfileState.firstName} {PatientProfileState.lastName}</p>
                        </ImgContainer>

                        <BioContainer>

                        <h4>Patient Weight:<span>{medicalHistory.patientWeight}</span></h4>
                       
                        

                       <h4 className="mt-3">Patient height:<span>{medicalHistory.patientHeight}</span></h4>

                       <h4 className="mt-3">Blood Type:<span>{medicalHistory.bloodType}</span></h4>



                        </BioContainer>   
                        <Link to="/docList">
                        <Button className="btn" variant="primary">Doctors List</Button>
                        </Link> 



                    </LeftSide>

                    <RightSide>

                        <h2>Medical History:</h2>
                       
                        
                        <h4 className="mt-4">Previous Medical Surgeries:</h4>
                        <p>{medicalHistory.diagnosis}</p>

                        
                        <h4 className="mt-2">Allergies:</h4>
                        <p>{medicalHistory.allergies}</p>

                        <h4 className="mt-2">Health Issues:</h4>
                        <p>{medicalHistory.healthIssues}</p>

                        <h4 className="mt-2">Medicine:</h4>
                        <p>{medicalHistory.medicine}</p>



                        
                       

                       
                        <Container className="p-float" ref={container}></Container>

                        
                        


                    </RightSide>

                </ProfileContainer>
            </ContentWrapper>

        </DocContainer>

    );
}

export default PatientProfile;

const DocContainer = styled.div`

height:100vh;
width: 100%;
background-color:#F8F8FF;
overflow: hidden;

`
const ContentWrapper = styled.div`

height: 100%;
width: 100%;
display: flex;
justify-content:center;
align-items:center;



`
const ProfileContainer = styled.div`
height: 70vh;
width:60%;
background-color:#ffff;
box-shadow:3px 3px 6px rgba(0,0,0,0.3),
inset -1px -1px 2px #6FBEC3;
border-radius: 0.5rem;
display: flex;
padding:1rem;

`

const LeftSide=styled.div`

    width:50%;
    height: 100%;
    perspective: 1000px;
    display: flex;
    flex-direction:column;
    position: relative;

    &:after
    {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height:100%;
        background-color: rgba(0,0,0,0.2);
        border-radius:2rem;

    }

    img
    {
        width: 160px;
        height: 160px;
        object-fit:cover;
        object-position: 30% 30%;
        border-radius:50%;
        box-shadow:  2px 2px 4px rgba(0,0,0,0.2) ;
        transform: perspective(1000px);
        transform-style: preserve-3d;
       
    }
    p
    {
   
        transform: translate(12%,5%);
        font-size: 24px;
        font-weight:500;
        color: rgba(0,0,0,0.8);
    }
    .btn
{
    background-color: #6FBEC3 !important;
    outline: none;
    border: none;
    margin-top: 3rem;
    width: 50%;
}


`

const RightSide=styled.div`

    width:50%;
    height: 100%;
    padding: 1rem;
    position: relative;

    h4
{
    font-size: 24px;
    font-weight:600;
    color: rgba(0,0,0,0.8);
   
}
span
{
    font-size:22px;
    color: rgba(0,0,0,0.6);
    margin-left: 0.3rem;
}

    p
    {
        font-size:14px;
        font-weight:400;
        color: white;
        background-color:red;
        display:inline-block !important;
        padding: 0.3rem 0.5rem;
        background-color: rgba(0,0,0,0.6);
        border-radius:0.5rem;
        
    }


  

`


const ImgContainer = styled.div`
display: flex;
p
{
    font-size: 28px;
    font-weight:600;
    color: rgba(0,0,0,0.8);

}
`

const BioContainer=styled.div`
padding-top: 1.2rem;

h4
{
    font-size: 28px;
    font-weight:600;
    color: rgba(0,0,0,0.8);
   
}
span
{
    font-size:22px;
    color: rgba(0,0,0,0.6);
    margin-left: 0.3rem;
}

    p
    {
        font-size:16px;
        font-weight:400;
        color: white;
        background-color:red;
        display:inline-block !important;
        padding: 0.3rem 0.5rem;
        background-color: rgba(0,0,0,0.6);
        border-radius:0.5rem;
        
    }

`
const Container = styled.div`

transform:translate(-50%,-10%);
width:100px;
position: absolute;
        right:-2rem;
        top: 0;
      

`