import react from 'react';
//styles 
import styled from 'styled-components';
//socket logic
import {socketContext} from '../socketContext';
import {useContext} from 'react';

const VideoNotification=()=>
{
    const {answerCall,call,callAccepted}=useContext(socketContext);
    return(
       <div>
           {
               call.isReceivedCall && ! callAccepted &&
               (
                   <div>
                      <h1>{call.name} is calling</h1>
                      <button onClick={answerCall}>answer</button>
                   </div>
               )
               
           }
       </div>
    );
};

export default VideoNotification;