import {useEffect,useRef} from "react";
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import lottie from 'lottie-web';
import docImg from '../imgs/doctor.svg';
import hospital from '../imgs/hospital.svg';
import ambulance from '../imgs/ambulance.svg';
import blood from '../imgs/blood-donation.svg';
import radiation from '../imgs/radiation.svg';
import medicine from '../imgs/drugs.svg';
import {Link} from 'react-router-dom';
const Home =()=>
{
    const containerI = useRef(null);
    const container=useRef(null);
    useEffect(()=>{

        lottie.loadAnimation({
            container:container.current,
            loop:true,
            autoPlay:true,
            animationData:require('../medical-staff.json')

        })

    },[])

    useEffect(()=>{

        lottie.loadAnimation({
            container:containerI.current,
            loop:true,
            autoPlay:true,
            animationData:require('../bot.json')

        })

    },[])

    const switcher=()=>
    {
        window.location.href ='http://localhost:3003/chatBot';
    }

    return(    

       
        
        <HomeContainer>
            <HomeNav/>
         
            <HomeWrapper>

                 <HomeDescription>
                    
                     <h3>Here to Serve</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>

                 </HomeDescription>
                  <LottiePlayer ref={container}></LottiePlayer>
                  
            </HomeWrapper>

            <OurServices>
                <h3>Our Services</h3>

                <ServiceRowI>

                    <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={docImg}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>QUALIFIED DOCTORS</h4>
                            <p>The Big Oxmox advised her <br></br>not to do so, because there <br></br> were thousands of bad 
                            <br></br>Commas, wild Question<br></br> Marks and devious<br></br> Semikoli</p>
                         
                        </ServiceDescContainer>

                    </Service>
            
                     <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={hospital}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>MEDICAL COUNSELING</h4>
                            <p>Little Blind Text didn’t listen.<br></br>She packed her seven<br></br> versalia, put her initial into
                            <br></br>the belt and made herself<br></br> on the way</p>
                         
                        </ServiceDescContainer>

                    </Service>

                        <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={ambulance}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>EMERGENCY SERVICES</h4>
                            <p>The Big Oxmox advised her <br></br>not to do so, because there <br></br> were thousands of bad 
                            <br></br>Commas, wild Question<br></br> Marks and devious<br></br> Semikoli</p>
                         
                        </ServiceDescContainer>

                    </Service>

                </ServiceRowI>

                <ServiceRowII>

                    <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={blood}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>BLOOD BANK</h4>
                            <p>The Big Oxmox advised her <br></br>not to do so, because there <br></br> were thousands of bad 
                            <br></br>Commas, wild Question<br></br> Marks and devious<br></br> Semikoli</p>
                         
                        </ServiceDescContainer>

                    </Service>
            
                     <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={radiation}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>OPERATION THEATER</h4>
                            <p>Little Blind Text didn’t listen.<br></br>She packed her seven<br></br> versalia, put her initial into
                            <br></br>the belt and made herself<br></br> on the way</p>
                         
                        </ServiceDescContainer>

                    </Service>

                        <Service>

                        <ServiceImgContainer className="hovering">
                             <img src={medicine}/>
                        </ServiceImgContainer>

                        <ServiceDescContainer>
                            <h4>FREE MEDICINE</h4>
                            <p>The Big Oxmox advised her <br></br>not to do so, because there <br></br> were thousands of bad 
                            <br></br>Commas, wild Question<br></br> Marks and devious<br></br> Semikoli</p>
                         
                        </ServiceDescContainer>

                    </Service>
                </ServiceRowII>

            </OurServices>

           
                 <LottiePlayerI onClick={switcher} ref={containerI}></LottiePlayerI>
            


        </HomeContainer>

  );
}


export default Home;

const HomeContainer =styled.div`

width: 100%;
height:auto;
background-color:#F8F8FF;



`;

const LottiePlayer=styled.div`

height:500px;
width: 500px;

`
const LottiePlayerI=styled.div`

height:200px;
width: 200px;
position:fixed;
right:0rem;
bottom:1rem;
cursor:pointer;

`
const HomeDescription =styled.div`

width: 500px;
padding-top:4.8rem;

h3
{
    font-size:3rem;
    color: rgba(0,0,0,0.8);
    position: relative;
}

h3::after 
{
    content:'';
    position: absolute;
    bottom:0;
    left: 0;
    width:60%;
    height:3px;
    border-radius: 20px;
    background-color: #6FBEC3;
}
p
{
    padding-top:0.6rem;
    color:#979595;
    line-height:1.8rem;
    font-size:18px;
}

`

const HomeWrapper=styled.div`

display:flex;
justify-content:space-between;
margin: auto;
width:80%;
height: 90vh;
padding-top: 6rem;
`

const OurServices=styled.div`

height:100vh;
padding-top:2rem;

width:80%;
margin: auto;
display: flex;
flex-direction:column;
h3
{
    font-size:3rem;
    padding-bottom: 3rem;
    color: rgba(0,0,0,0.8);
  text-align:center;
}
`

const ServiceRowI=styled.div`

width: 100%;
height:15rem;
display: flex ;
justify-content:center;
align-items:center;


`
const Service =styled.div`
 
   width: 400px;
   height:100%;
   margin: 20px;
   border: 1px solid #f2f2f2 !important;
   padding: 1.2rem;
   display: flex;
   transition:0.3s ease-in-out;
   &:hover  {
    
    box-shadow: 4px 4px 7px rgba(0,0,0,0.3);

  }

  &:hover .hovering  {
    background: #979595;
  }



`

const ServiceImgContainer=styled.div`
       width:70px;
       height:70px;
       background: #6FBEC3;
       display: flex ;
       justify-content:center;
       align-items:center;
       border-radius: 50%;
       transition:0.3s ease-in-out;
`

const ServiceDescContainer =styled.div`

padding-left: 1rem;

h4
{
    font-size: 19px;
    font-weight:bold;
}
p
{
    font-size: 17px;
    color:#979595;
}

`



const ServiceRowII=styled.div`

width: 100%;
height:15rem;
display: flex ;
justify-content:center;
align-items:center;
margin-top: 4rem;


`