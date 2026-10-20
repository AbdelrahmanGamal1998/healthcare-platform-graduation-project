import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import docProfile from '../imgs/docProfile.jpg';
import {Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {docProfileAction} from '../actions/docProfileAction';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';


const DocProfile=()=>
{
    const dispatch=useDispatch();
    useEffect(()=>{
  
      dispatch(docProfileAction());
       
    },[dispatch]);

    const {profileState}=useSelector((state)=>state.docProfile);

  
    const runnnn=()=>
    {
        window.location.href='http://localhost:3001/video'
    }

    return(

        <DocContainer>
            <HomeNav/>

            <ContentWrapper>
                <ProfileContainer>

                    <LeftSide>

                        <ImgContainer>
                        <img src={`http://localhost:3001/uploads/${profileState.doctorImage}`}/>
                        <p><span>Dr.</span> <strong>{profileState.firstName} {profileState.lastName}</strong></p>
                        </ImgContainer>

                        <BioContainer>

                            <h4>Bio:</h4>
                            <h6>{profileState.qualifications}</h6>

                            <Schedule>
                                <h4>Schedule</h4>
                            <div>
                                 <Button className="schedule-btn" variant="primary">{profileState.DateI}</Button>
                                 <Button className="schedule-btn" variant="primary">{profileState.DateII}</Button>
                                 <Button className="schedule-btn" variant="primary">{profileState.DateIII}</Button>
                            </div>

                            </Schedule>

                        </BioContainer>    



                    </LeftSide>

                    <RightSide>

                        <h4>Speciality:</h4>
                       
                        <p>{profileState.doctorSpecialty}</p>

                        <h4>Experience:</h4>
                        <p>{profileState.experience}</p>

                        
                        <h4>Mail:</h4>
                        <p>{profileState.email}</p>

                        
                        <h4>Address:</h4>
                        <p>{profileState.clinicAddress}</p>
                        
  
                    
                        <p onClick={runnnn} className="p-float">Video Call</p>

                       
                        


                    </RightSide>

                </ProfileContainer>
            </ContentWrapper>

        </DocContainer>

    );
}

export default DocProfile;

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
        span
        {
            font-size: 32px;
            font-weight:600;
        }
        transform: translate(12%,5%);
        font-size: 28px;
        font-weight:500;
        color: rgba(0,0,0,0.8);
    }


`

const RightSide=styled.div`

    width:50%;
    height: 100%;
    padding: 1rem;
    position: relative;

    h4
{
    font-size: 28px;
    font-weight:600;
    color: rgba(0,0,0,0.8)
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


    .p-float
    {
        position: absolute;
        right:0;
        top: 0;
        font-size:20px;
        font-weight:500;
        background-color:#6FBEC3;

    }


`
const BtnWrappers = styled.div`
display: block;
padding-top: 0.4rem;
.btn
{
    background-color: #6FBEC3 !important;
    outline: none;
    border: none;
    margin-top: 3rem;
}
.btn:nth-child(2)
{
    margin-left:1rem;
}
`

const ImgContainer = styled.div`
display: flex;

`

const BioContainer=styled.div`
padding-top: 1.2rem;

h4
{
    font-size: 30px;
    font-weight:600;
    color: rgba(0,0,0,0.8)
}
h6
{
    font-size:18px;
    color: rgba(0,0,0,0.6);
    font-weight:500;
    line-height:1.6rem;
}

`

const Schedule=styled.div`

width: 90%;
height:140px;
border: 1px solid rgba(0,0,0,0.3);
box-shadow:2px 2px 2px rgba(0,0,0,0.3);
margin-top:1rem;
padding: 1rem;
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
.schedule-btn
{
    background-color: rgba(0,0,0,0.6) !important;
    outline: none;
    border: none;
   margin: 0.2rem;

}
h4
{
    display: block;
    font-size: 20px;
}
`