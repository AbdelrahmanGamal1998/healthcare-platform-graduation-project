import {Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
const DocLogin =()=>
{
    return(

        <Wrapper>

            <HomeNav/>

            <h5>Doctor login</h5>


        <DocLoginWrapper>
        <Form action="/Doctor/login" method="POST">
  <Form.Group className="mb-3">
    <Form.Label>UserName or Email or PhoneNumber</Form.Label>
    <Form.Control type="text" name ="username" placeholder="Enter User Name" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  name="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree On Terms" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
     </Form>
     </DocLoginWrapper>
     </Wrapper>

    );
}

export default DocLogin;

const Wrapper=styled.div`

width: 100%;
height:100vh;
background-color:#F8F8FF;
h5
{
    position:absolute;
    top: 20%;
    left: 50%;
    transform:translate(-50%,-20%);
    font-size:32px;
    font-weight: 500;
    color:rgba(0,0,0,0.6);
}

Button
{
    background-color: #6FBEC3 !important;
    outline: none;
    border: none;
}


`

const DocLoginWrapper=styled.div`

width: 400px;
height:auto;
border:3px solid #6FBEC3;
border-radius: 14px;
margin: auto;
margin-top:10%;
padding:3rem;
box-shadow: 2px 2px 8px rgba(0,0,0,0.1);

`