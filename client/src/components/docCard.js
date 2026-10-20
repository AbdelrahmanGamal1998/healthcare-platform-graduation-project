import { useEffect, useRef } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {moreInfoAction} from '../actions/moreInfoAction';
import {toggleAction} from '../actions/toggleAction';
import star from '../imgs/star.svg';
import halfStar from '../imgs/halfStar.svg';

const DocCard = ({ firstName,lastName,speciality,qualifications,img,dob,mail,age,address,experience,userName,DateI,DateII,DateIII,rating}) => {


/*
    let InfofName={firstName};
    let InfolName={lastName};
    let Infospeciality={speciality};
    let InfoQualifications={qualifications};
    let InfoImg={img};
    let InfoDob={dob};
    let InfoMail={mail};
    let InfoAge={age};
    let InfoAddress={address};
    */
    let allInfo=
    {
        firstName,
        lastName,
        speciality,
        qualifications,
        img,
        dob,
        mail,
        age,
        address,
        experience,
        userName,
        DateI,
        DateII,
        DateIII
      
    }

    const dispatch=useDispatch();

    const runn=(e)=>{
        
        e.preventDefault();
        dispatch(toggleAction);
        return dispatch(moreInfoAction(allInfo));
        
    }

    const ratio=rating>4.7;

    return (


        <DoctorCard>
            <img src={`http://localhost:3001/uploads/${img}`}/>
            <div>
                <p><span>Dr</span>.{firstName} {lastName}</p>
                <ul>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    <li><img src={star}/></li>
                    {
                        (ratio)?
                        (
                            <li><img src={star}/></li>

                        )
                        :
                        (
                            <li><img src={halfStar}/></li>
                        )
                    }
                    
                </ul>
                <p>{speciality}</p>
                <p>{qualifications}</p>
            </div>
            <Button onClick={runn}  className="btn" variant="primary">More info</Button>
        </DoctorCard>


    );
}

export default DocCard;


const DoctorCard=styled.div`

width: 40rem;
height:30vh;
border: solid 1px rgba(0,0,0,0.2);
border-radius:0.3rem;
box-shadow: 2px 2px 2px rgba(0,0,0,0.2),inset -2px -2px 1px rgba(0,0,0,0.1);
padding:16px;
margin:1rem 0rem;
display: flex;
position: relative;
transition:0.3s ease-in-out;
img
{
    width:100px;
    height:100px;
    object-fit: cover;
    border-radius:50%;
    object-position: 40% 40%;
}
div
{
    padding-left:1rem ;
    display: flex;
    flex-direction:column;

    span
    {
        font-size: 26px;
        font-weight: 700;
    }
    p:nth-child(1)
    {
        font-size:20px;
        font-weight: 600;
        color: rgba(0,0,0,0.8);
        margin: 0;
      
    }
    p:nth-child(2)
    {
        color: rgba(0,0,0,0.6); 
        margin: 0;
        font-size: 18px;
        font-weight: 500;
    }
    p:nth-child(3)
    {
        max-width:20rem;
        color: rgba(0,0,0,0.7); 
        font-weight: 600;
        padding-top: 0.5rem;
        font-size: 14px;
        line-height:1.5rem;
    }

}
.btn
{
    background-color: #6FBEC3 !important;
    outline: none;
    border: none;
    position: absolute;
    right: 1rem;
    bottom: 1rem;

}
&:hover 
{
    transform: scale(1.1);
    box-shadow: 3px 3px 3px rgba(0,0,0,0.3);
}
ul
{
    padding-left: 0 !important;
    margin-bottom: 0 !important;

}
ul li
{
    display: inline-block;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
    img
    {
        width:15px;
        height:15px;
    }
  
}
`
