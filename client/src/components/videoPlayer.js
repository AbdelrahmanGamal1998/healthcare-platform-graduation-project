import react from 'react';
//styles 
import styled from 'styled-components';
//socket logic
import {socketContext} from '../socketContext';
import {useContext} from 'react';
const VideoPlayer=()=>
{
    const {name,callAccepted,myVideo,userVideo,callEnded,stream,call}=useContext(socketContext);
    return(
       <VideosContainer>

           {
               stream &&(

                <div className="myVideo">
                     <p>{name||'name'}</p>
                     <video playsInline muted ref={myVideo} autoPlay/>
               </div>

               )
           }

           {
               callAccepted && !callEnded &&(

                <div className="userVideo">
                    <p>{call.name||'name'}</p>
                    <video playsInline  ref={userVideo} autoPlay/>
                 </div>

               )
           }


       </VideosContainer>
    );
};

export default VideoPlayer;

const VideosContainer=styled.div`

display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100vh;

.myVideo
{
    height:30vh;
    width:30%;
    position: absolute;
    top:18%;
    right:18%;
    video
    {
        height:100%;
        width:100%;
    }
    p
    {
        opacity:0;
    }

}
.userVideo
{
    height:80vh;
    width:100%;
    margin-left:20px;
    video
    {
        height:100%;
        width:100%;
        z-index:10000;
    }    
    p
    {
        opacity: 0;
    }

}
`