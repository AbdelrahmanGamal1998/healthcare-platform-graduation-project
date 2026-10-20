import react from 'react';
import { useState } from 'react';
//styles 
import styled from 'styled-components';
//socket logic
import { socketContext } from '../socketContext';
import { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const VideoOptions = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(socketContext);
    //state
    const [idToCall, setIdToCall] = useState('');

    return (
        <OptionsContainer>

            <Wrapper>

                <div className="accInfo">
                    <p>Account info</p>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <CopyToClipboard text={me}>
                        <button>Copy</button>

                    </CopyToClipboard>

                </div>

                <div className="makeCall">
                    <p>Make a call</p>
                    <input type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    {
                        callAccepted && !callEnded ?
                            (
                                <button onClick={leaveCall}>Hang Up</button>
                            ) :
                            (
                                <button onClick={() => callUser(idToCall)}>Call</button>
                            )
                    }
                </div>

            </Wrapper>





            {children}
        </OptionsContainer>
    );
};

export default VideoOptions;

const OptionsContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
height:40vh;
width:50%;
border:solid 1px rgba(0,0,0,0.3);
box-shadow:2px 2px 2px rgba(0,0,0,0.3);
margin:auto;
margin-top:5px;
`
const Wrapper = styled.div`

display:flex;
justify-content:space-evenly;
width:100%;

div
{
    
    display:flex;
    flex-direction:column;
    
    
}

`
