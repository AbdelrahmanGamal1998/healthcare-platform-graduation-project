
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HomeNav from '../components/homeNav';
const PatientRegister = () => {
  return (

    <Wrapper>

      <HomeNav />

      <h5>Patient Register</h5>


      <PatientRegisterWrapper>
        <Form action="/Patient/register" method="POST" enctype="multipart/form-data">

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Enter First Name" required />

          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Enter Last Name" required />

          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" name="userName" placeholder="Enter User Name" required />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>

            <select className="selectOptions" type="text" name="gender" >
              <option value="male">Male</option>
              <option value="saab">Female</option>

            </select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" name="dob" required />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" name="age" placeholder="Enter Age" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Profile Picture</Form.Label>
            <Form.Control type="file" name="Image" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" placeholder="Enter Country" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" placeholder="Enter City" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" name="street" placeholder="Enter Street" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phoneNumber" placeholder="Enter Phone number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>

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

export default PatientRegister;

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