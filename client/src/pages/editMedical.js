import {Form,Button,FormLabel} from 'react-bootstrap';
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import MHpic from '../imgs/medical-history.png';


const EditMedical =()=>
{
    return(

        <Wrapper>

            <HomeNav/>

            <h5>Update Medical History</h5>
            


        <DocLoginWrapper>
        <img src={MHpic}/>
        <Form action="/MedicalHistory/updateMH" method="POST">

  <Form.Group className="mb-3">
    <Form.Control className="formFix"  type="text" name ="patientUname" placeholder="Enter Patient UserName" required/>
  </Form.Group>

  <Form.Group className="mb-3">
          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Update Medicine" name="medicine" />
          </FormLabel>
  </Form.Group>

  <Form.Group className="mb-3">
          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Update Tests" name="tests" />
          </FormLabel>
  </Form.Group>

  <Form.Group className="mb-3">
          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Update Allergies" name="healthIssues" />
          </FormLabel>
  </Form.Group>

  <Form.Group className="mb-3">
          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Update Health Issues" name="allergies" />
          </FormLabel>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
     </Form>
     </DocLoginWrapper>
     </Wrapper>

    );
}

export default EditMedical;

const Wrapper=styled.div`

width: 100%;
min-height:100vh;
background-color:#F8F8FF;
padding-bottom: 3rem;
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

width: 600px;
height:auto;
border:3px solid #6FBEC3;
border-radius: 14px;
margin: auto;
margin-top:10%;
padding:3rem;
box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
position:relative;
img
{
  position:absolute;
  width:100px;
  top:2.2rem;
  right:2.2rem;

  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count:infinite;
}

.formFix
{
  width:300px !important;
  margin-bottom:2.3rem !important;

}
@keyframes example {
  from {transform: rotate(20deg) scale(1)}
  to {transform: rotate(360deg) scale(1.3)}
}
`