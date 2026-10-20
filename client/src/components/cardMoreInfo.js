
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAction } from '../actions/toggleAction';
import { useRef } from 'react';

const CardMoreInfo = () => {


    const pointerr = useRef(null);
    const { firstName, lastName, speciality, qualifications, imgo, mail, address, experience, userName, DateI, DateII, DateIII } = useSelector((state) => state.docMoreInfo);
    const dispatch = useDispatch();

    const tog = () => {
        dispatch(toggleAction);


    }

    const fixToggle = (e) => {
        e.stopPropagation();


    }

    let dummy = false;

    const dateIAction = (e) => {
        if (e.target.value.includes('Reserved')||e.target.value=="") {
            e.target.value = "";
            dummy = true;


        }
        else
        {
            dummy=false;
        }

    }

    const firee = (e) => {
        if (dummy == true) {

            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            e.preventDefault();
           alert("Appointment Already Reserved, Choose Another Appointment");
        }
        
    }


    return (

        <MoreInfoSection onClick={tog}>



            <MoreInfoWrapper onClick={fixToggle}>

                <LeftSide>

                    <ImgContainer>
                        <img src={`http://localhost:3001/uploads/${imgo}`} />
                        <p><span>Dr</span>.{firstName} {lastName}</p>
                    </ImgContainer>

                    <BioContainer>

                        <h4>Bio:</h4>
                        <h6>{qualifications}</h6>

                        <Schedule>
                            <h4>Online reservation</h4>

                            <Form className="mt-1" action="/Appointment/reserveOnline" method="POST">
                                <Form.Group className="mb-1">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" name="patientUserName" placeholder="Enter User Name" required />
                                </Form.Group>

                                <Form.Group className="mb-1">
                                    <Form.Label>Email </Form.Label>
                                    <Form.Control type="email" name="patientEmail" placeholder="Enter Email" required />

                                </Form.Group>

                                <input className="d-none" name="doctorEmail" type="text" value={mail} />

                                <input className="d-none" name="doctorUserName" type="text" value={userName} />

                                <Form.Group className="mb-1 mt-1">
                                    <Form.Label>Date</Form.Label>

                                    <select ref={pointerr} onChange={dateIAction} className="selectOptions" name="appointmentDate" type="text" >
                                    <option className="d-none" >Choose Date</option>
                                        <option value={DateI}>{DateI}</option>
                                        <option value={DateII}>{DateII}</option>
                                        <option value={DateIII}>{DateIII}</option>


                                    </select>
                                </Form.Group>



                                <Button onClick={firee} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>



                        </Schedule>

                    </BioContainer>



                </LeftSide>

                <RightSide>

                    <h4>Speciality:</h4>

                    <p>{speciality}</p>

                    <h4>Experience:</h4>
                    <p>{experience}</p>


                    <h4>Mail:</h4>
                    <p>{mail}</p>


                    <h4>Address:</h4>
                    <p>{address}</p>

                    <Schedule>
                        <h4>Offline reservation</h4>
                        <p className="mt-1">{DateI}</p>
                        <p >{DateII}</p>
                        <p >{DateIII}</p>

                    </Schedule>

                    <p className="p-float">Fees:200 Eg</p>





                </RightSide>



            </MoreInfoWrapper>








        </MoreInfoSection>

    );
}

export default CardMoreInfo;

const MoreInfoSection = styled.div`

position: absolute;
background:rgba(0,0,0,0.4);
height:100vh;
width:100%;
z-index:10;
display: flex;
align-items: center;

`

const MoreInfoWrapper = styled.div`

height: 90vh;
width:60%;
margin: auto;
background-color: #F8F8FF;
padding: 2rem;
box-shadow:3px 3px 6px rgba(0,0,0,0.3);
border-radius: 0.5rem;
display: flex;
z-index:999999999999;

`


const LeftSide = styled.div`

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

const RightSide = styled.div`

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

const BioContainer = styled.div`
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

const Schedule = styled.div`

width: 90%;
height:auto;
border: 1px solid rgba(0,0,0,0.3);
box-shadow:2px 2px 2px rgba(0,0,0,0.3);
margin-top:1rem;
padding: 1rem;
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;

h4
{
    display: block;
    font-size: 20px;
}
button
{
    background-color: #6FBEC3 !important;
    outline: none;
    border: none;
    margin-top: 0.5rem;
}
`
