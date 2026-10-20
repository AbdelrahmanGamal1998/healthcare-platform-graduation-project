import {react,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loginAction} from './actions/loginAction';
//pages
import Video from './pages/videochat';
import Home from './pages/home';
import DocLogin from './pages/docLogin';
import PatientLogin from './pages/patientLogin';
import DocRegister from './pages/docRegister';
import PatientRegister from './pages/patientRegister';
import MedicalHistory from './pages/medicalHistory';
import DocList from './pages/DoctorList';
import DocProfile from './pages/docProfile';
import Examination from './pages/examination';
import EditMedical from './pages/editMedical';
import PatientProfile from './pages/patientProfile';
import GeneratedReport from './pages/generatedReport';
//styles 
import GlobalStyles from './components/globalstyles';
//socket
import {ContextProvider} from './socketContext';
//routing
import {Switch,Route} from 'react-router-dom';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{

    dispatch(loginAction);
     
  });
  return (
   <div>
     <GlobalStyles/>
     <Switch>

     <Route path="/" exact>
     <Home/>
     </Route>
     
     <Route path="/video">
     <ContextProvider>
     <Video/>
     </ContextProvider>
     </Route>

     <Route path="/docLogin">
       <DocLogin/>
     </Route>

     <Route path="/patientLogin">
       <PatientLogin/>
     </Route>

     <Route path="/docRegister">
       <DocRegister/>
     </Route>

     <Route path="/patientRegister">
       <PatientRegister/>
     </Route>

     <Route path="/medicalHistory">
       <MedicalHistory/>
     </Route>

     <Route path="/docList">
       <DocList/>
     </Route>

     <Route path="/docProfile">
       <DocProfile/>
     </Route>
     
     <Route path="/examination">
       <Examination/>
     </Route>

     <Route path="/editMedical">
       <EditMedical/>
     </Route>

     <Route path="/patientProfile">
       <PatientProfile/>
     </Route>

     <Route path="/report">
       <GeneratedReport/>
     </Route>
     
     
     </Switch>
   </div>
  );
}

export default App;
