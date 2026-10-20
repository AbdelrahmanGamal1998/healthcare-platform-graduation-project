import { useEffect, useRef } from "react";
import { Form, Button, FormLabel } from 'react-bootstrap';
import styled from 'styled-components';
import lottie from 'lottie-web';
import HomeNav from '../components/homeNav';
const MedicalHistory = () => {
  const container = useRef(null);
  useEffect(() => {

    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoPlay: true,
      animationData: require('../xray.json')

    })

  }, [])

  return (

    <Wrapper>

      <HomeNav />

      <Container ref={container}></Container>

      <h5>Medical History</h5>


      <MedicalHistoryWrapper>
        <Form action="/MedicalHistory/createMH" method="POST" enctype="multipart/form-data">

          <Form.Group className="mb-3">
            <Form.Label>patient Weight</Form.Label>
            <Form.Control type="text" name="patientWeight" placeholder="Enter Weight" required />

          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>patient Height</Form.Label>
            <Form.Control type="text" name="patientHeight" placeholder="Enter Height" required />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Blood Type</Form.Label>
            <Form.Control type="text" name="bloodType" placeholder="Enter blood Type" required />

          </Form.Group>


          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Label>Previous Medical Surgeries</Form.Label>
            <Form.Control as="textarea" placeholder="Ex. Surgery" name="diagnosis" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Label>Medicine</Form.Label>
            <Form.Control as="textarea" placeholder="Ex. Cometrix" name="medicine" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Label>Allergies</Form.Label>
            <Form.Control as="textarea" placeholder="Ex. حساسيه من الجو" name="allergies" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Label>Health Issues</Form.Label>
            <Form.Control as="textarea" placeholder="Ex. السكر والضغط" name="healthIssues" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Label>Previous Tests</Form.Label>
            <Form.Control as="textarea" placeholder="Ex. Blood test" name="tests" />
          </FormLabel>

          <Form.Group className="mb-3">
            <Form.Label>Upload Attachment</Form.Label>
            <Form.Control type="file" name="attachment" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree On Terms" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MedicalHistoryWrapper>
    </Wrapper>

  );
}

export default MedicalHistory;

const Wrapper = styled.div`

width: 100%;
height:auto;
padding-bottom: 2rem;
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

const MedicalHistoryWrapper = styled.div`

width: 400px;
height:auto;
border:3px solid #6FBEC3;
border-radius: 14px;
margin: auto;
margin-top:10%;
padding:3rem;
box-shadow: 2px 2px 8px rgba(0,0,0,0.1);

.selectOptions
{
    margin-left: 10px;
    width: 30%;
}
`

const Container = styled.div`
position: fixed;
top:50%;
left:10%;
transform:translate(-50%,-10%);
width:300px;
`