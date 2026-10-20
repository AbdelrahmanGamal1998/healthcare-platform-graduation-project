
import {NavDropdown,Item} from 'react-bootstrap';
import styled from 'styled-components';
import "../styles/homeNav.css";
import {Link} from 'react-router-dom';
const HomeNav=()=>
{
    return(

        <HomeNavBar>
           <h2>Health Care<span>.</span></h2>

           <ul>

              
              
               <li>
                   
                 <NavDropdown title="SignIn" id="basic-nav-dropdown">
                     
                      <NavDropdown.Item className="signDrop" ><Link style={{ textDecoration: 'none' }} to="/docLogin"><span>SignIn as a Doctor</span></Link></NavDropdown.Item>
                      
                      
                      <NavDropdown.Item className="signDrop"><Link style={{ textDecoration: 'none' }} to="/patientLogin"><span>SignIn as a Patient</span></Link></NavDropdown.Item>
                      
                 </NavDropdown>
               </li>
               <li>

                 <NavDropdown title="SignUp" id="basic-nav-dropdown">
                      <NavDropdown.Item className="signDrop" ><Link style={{ textDecoration: 'none' }} to="/docRegister"><span>SignUp as a Doctor</span></Link></NavDropdown.Item>
                      <NavDropdown.Item className="signDrop"><Link style={{ textDecoration: 'none' }} to="/patientRegister"><span>SignUp as a Patient</span></Link></NavDropdown.Item>
                 </NavDropdown>
    
               </li>
               <li >Contact Us</li>

             <Link to="/">
                 <li className="adjust">LogOut</li>         
                  </Link>
           </ul>


        </HomeNavBar>

    );
}

export default HomeNav;

const HomeNavBar =styled.nav`

background:#6FBEC3;
min-height:8vh;
display:flex;
justify-content:space-between;
align-items:center;
padding: 0rem 5rem;
color:white;
h2
{
    font-family: 'Merienda', cursive;
    margin:0;
    line-height:0;
    font-size:2.4rem;

    span{
        color:#DAE2E4;
        font-weight:bold;
        font-size: 3rem;
    }
}
ul
{
    list-style: none;
    padding-top:0;
    margin-top:0;
    padding-bottom:0;
    margin-bottom:0;
    li
    {
        display:inline-block;
        padding: 1rem 1.3rem;
        font-weight: 500;
        font-size: 19px;
        cursor: pointer;
        transition:0.3s ease-in-out;
        
    }

    li:hover
    {
        background: rgba(243, 240, 240,0.1);
    }
    

}

.signDrop span
{

    text-decoration:none !important;
    color: rgba(0,0,0,0.8) !important;
    list-style-type: none !important;

}
.adjust
{
    list-style:none;
    text-decoration:none;
    color:white;

}
`;