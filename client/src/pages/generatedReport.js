
import { Form, Button,FormLabel} from 'react-bootstrap';
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
const GeneratedReport = () => {
  return (

    <Wrapper>

      <HomeNav />

      <h5>Genrated Report</h5>


      <PatientRegisterWrapper>
        <Form action="/GenratedReport/Genrate" method="POST" >

          <Form.Group className="mb-3">
            <Form.Label>doctor username</Form.Label>
            <Form.Control type="text" name="doctorusername" placeholder="Enter doctor username" required />

          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>patient email</Form.Label>
            <Form.Control type="text" name="patientemail" placeholder="Enter patient email" required />

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>patient username</Form.Label>
            <Form.Control type="text" name="patientusername" placeholder="patient username" required />

          </Form.Group>
          
          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="patient Medical Diagnosis & Description of injury" name="question1" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="The History of the Affections and Treatments Applied" name="question2" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="the Clinical Findings (Symptoms , Results of any investigations )" name="question3" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="the Vital Signs of the patients is" name="question4" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="the Prescriptions that the patient should take is" name="question5" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="please Examine the next the following Medical Condations" name="question6" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control style={{height:'120px'}} as="textarea" placeholder="the next consultaion and the instructions for the patient is" name="question7" />
          </FormLabel>

          



          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree On Terms" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </PatientRegisterWrapper>
    </Wrapper>

  );
}

export default GeneratedReport;

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

const PatientRegisterWrapper = styled.div`

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