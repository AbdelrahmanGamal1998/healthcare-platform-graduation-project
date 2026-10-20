import { Form, Button, FormGroup, FormLabel } from 'react-bootstrap';
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Examination = () => {
  const container = useRef(null);
  useEffect(() => {

    lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoPlay: true,
      animationData: require('../examination.json')

    })

  }, [])
  return (

    <Wrapper>


      <HomeNav />



      <h5>A Curious Patient Is A Healthy Patient</h5>


      <ExaminationWrapper>
        <Container ref={container}></Container>
        <Form action="/Email/createPF" method="POST">

          <FormGroup>
            <FormLabel className="formControl" controlId="floatingTextarea" className="mb-3">
              <Form.Control className="formControl" as="textarea" placeholder="Reason for examination" name="question1" />
            </FormLabel>
          </FormGroup>

          <FormGroup>
            <FormLabel className="formControl" controlId="floatingTextarea" className="mb-3">
              <Form.Control className="formControl" as="textarea" placeholder="Have you received any treatment" name="question2" />
            </FormLabel>
          </FormGroup>

          <FormGroup>
            <FormLabel className="formControl" controlId="floatingTextarea" className="mb-3">
              <Form.Control className="formControl" as="textarea" placeholder="What Prescription and Non-prescription Medications Do You Take?" name="question3" />
            </FormLabel>
          </FormGroup>

          <FormGroup>
            <FormLabel className="formControl" controlId="floatingTextarea" className="mb-3">
              <Form.Control className="formControl" as="textarea" placeholder="What Is Your Smoking, Alcohol and Illicit Drug Use History?" name="question4" />
            </FormLabel>
          </FormGroup>

          <FormGroup>
            <FormLabel className="formControl" controlId="floatingTextarea" className="mb-3">
              <Form.Control className="formControl" as="textarea" placeholder="What Prescription and Non-prescription Medications Do You Take?" name="question5" />
            </FormLabel>
          </FormGroup>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ExaminationWrapper>
    </Wrapper>

  );
}

export default Examination;

const Wrapper = styled.div`

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

const ExaminationWrapper = styled.div`

width: 40rem;
height:auto;
border:3px solid #6FBEC3;
border-radius: 14px;
margin: auto;
margin-top:10%;
padding:2rem;
box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
position: relative;
.formControl
{
    width: 400px !important;
   
}
`
const Container = styled.div`
position: absolute;
top:0%;
right:0%;

width:240px;
`