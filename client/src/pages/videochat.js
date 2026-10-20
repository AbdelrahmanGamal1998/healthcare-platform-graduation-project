import react from 'react';
import HomeNav from '../components/homeNav';
//video components
import VideoNotification from '../components/videoNotifications';
import VideoOptions from '../components/videoOptions';
import VideoPlayer from '../components/videoPlayer';

//styles
import styled from 'styled-components';
const Video=()=>
{
    return(
       <VideoContainer>
           <HomeNav />
           <VideoPlayer/>
         
           <VideoOptions>
                 <VideoNotification/>
           </VideoOptions>    

       </VideoContainer>
    );
};

export default Video;

const VideoContainer=styled.div`

padding-bottom: 1rem;

`