
import { Form, Button, FormLabel } from 'react-bootstrap';

import styled from 'styled-components';
import HomeNav from '../components/homeNav';

const DocRegister = () => {

  alert("you can select and update 3 slots once then submit and you can return to the form again to select and update new available dates");

  return (

    <Wrapper>

      <HomeNav />

      <h5>Doctor Register</h5>


      <DocRegisterWrapper>
        <Form action="/Doctor/register" method="POST" enctype="multipart/form-data">

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="doctorFname" placeholder="Enter First Name" required />

          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="doctorLname" placeholder="Enter Last Name" required />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name="doctorUname" placeholder="Enter User Name" required />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>

            <select className="selectOptions" name="doctorGender" type="text" >
              <option value="male">Male</option>
              <option value="saab">Female</option>

            </select>
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" name="doctorDOB" required />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" name="doctorAge" placeholder="Enter Age" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="doctorEmail" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Clinic Address</Form.Label>
            <Form.Control type="text" name="doctorClinic" placeholder="Enter Clinic Address" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="doctorPhone" placeholder="Enter Phone number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="doctorPassword" placeholder="Enter Password" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Specialization</Form.Label>
            <Form.Control type="text" name="doctorSpecialization" placeholder="Enter Specialization" required />
          </Form.Group>
    

          <Form.Group className="mb-3">
            <Form.Label>Upload Profile Picture</Form.Label>
            <Form.Control type="file" name="doctorImage" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select 3 available dates:</Form.Label>

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select 1st available date</Form.Label>

            <Form.Control type="date" name="doctorAvailabilityDate1"  required />
            <FormSpacing>
              <Form.Label>From</Form.Label>
              <select className="selectOptions" type="text" name="doctorAvailabilityFrom1">
                <option value="1am">1am</option>
                <option value="2am">2am</option>
                <option value="3am">3am</option>
                <option value="4am">4am</option>
                <option value="5am">5am</option>
                <option value="6am">6am</option>
                <option value="7am">7am</option>
                <option value="8am">8am</option>
                <option value="9am">9am</option>
                <option value="10am">10am</option>
                <option value="11am">11am</option>
                <option value="12am">12am</option>
              </select>

              <Form.Label>To</Form.Label>
              <select className="selectOptions" type="text"  name="doctorAvailabilityTo1" >
                <option value="1pm">1pm</option>
                <option value="2pm">2pm</option>
                <option value="3pm">3pm</option>
                <option value="4pm">4pm</option>
                <option value="5pm">5pm</option>
                <option value="6pm">6pm</option>
                <option value="7pm">7pm</option>
                <option value="8pm">8pm</option>
                <option value="9pm">9pm</option>
                <option value="10pm">10pm</option>
                <option value="11pm">11pm</option>
                <option value="12pm">12pm</option>

              </select>
            </FormSpacing>
          </Form.Group>




          <Form.Group className="mb-3">
            <Form.Label>Select 2nd available date</Form.Label>

            <Form.Control type="date" name="doctorAvailabilityDate2"  required />
            <FormSpacing>
              <Form.Label>From</Form.Label>
              <select className="selectOptions" type="text" name="doctorAvailabilityFrom2">
                <option value="1am">1am</option>
                <option value="2am">2am</option>
                <option value="3am">3am</option>
                <option value="4am">4am</option>
                <option value="5am">5am</option>
                <option value="6am">6am</option>
                <option value="7am">7am</option>
                <option value="8am">8am</option>
                <option value="9am">9am</option>
                <option value="10am">10am</option>
                <option value="11am">11am</option>
                <option value="12am">12am</option>
              </select>

              <Form.Label>To</Form.Label>
              <select className="selectOptions" type="text"  name="doctorAvailabilityTo2" >
                <option value="1pm">1pm</option>
                <option value="2pm">2pm</option>
                <option value="3pm">3pm</option>
                <option value="4pm">4pm</option>
                <option value="5pm">5pm</option>
                <option value="6pm">6pm</option>
                <option value="7pm">7pm</option>
                <option value="8pm">8pm</option>
                <option value="9pm">9pm</option>
                <option value="10pm">10pm</option>
                <option value="11pm">11pm</option>
                <option value="12pm">12pm</option>

              </select>
            </FormSpacing>
          </Form.Group>



          <Form.Group className="mb-3">
            <Form.Label>Select 3rd available date</Form.Label>

            <Form.Control type="date" name="doctorAvailabilityDate3"  required />
            <FormSpacing>
              <Form.Label>From</Form.Label>
              <select className="selectOptions" type="text" name="doctorAvailabilityFrom3">
                <option value="1am">1am</option>
                <option value="2am">2am</option>
                <option value="3am">3am</option>
                <option value="4am">4am</option>
                <option value="5am">5am</option>
                <option value="6am">6am</option>
                <option value="7am">7am</option>
                <option value="8am">8am</option>
                <option value="9am">9am</option>
                <option value="10am">10am</option>
                <option value="11am">11am</option>
                <option value="12am">12am</option>
              </select>

              <Form.Label>To</Form.Label>
              <select className="selectOptions" type="text" name="doctorAvailabilityTo3" >
                <option value="1pm">1pm</option>
                <option value="2pm">2pm</option>
                <option value="3pm">3pm</option>
                <option value="4pm">4pm</option>
                <option value="5pm">5pm</option>
                <option value="6pm">6pm</option>
                <option value="7pm">7pm</option>
                <option value="8pm">8pm</option>
                <option value="9pm">9pm</option>
                <option value="10pm">10pm</option>
                <option value="11pm">11pm</option>
                <option value="12pm">12pm</option>

              </select>
            </FormSpacing>
          </Form.Group>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Your Qualifications" name="doctorQualifications" />
          </FormLabel>

          <FormLabel controlId="floatingTextarea" className="mb-3">
            <Form.Control as="textarea" placeholder="Your Experience" name="doctorExperience" />
          </FormLabel>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree On Terms" />
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </DocRegisterWrapper>
    </Wrapper>

  );
}

export default DocRegister;

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

const DocRegisterWrapper = styled.div`

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
const FormSpacing = styled.div`
margin-top: 1rem;

`
