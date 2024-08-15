import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import AboutUsComponent from './Components/About';
import ContactUsComponent from './Components/Contact';
import SignUp from './Components/SignUp';
import LogOutComponent from './Components/LogOutComponent';
import Childregistration from './Components/Childregistration';
import Parentregistration from './Components/ParentRegisration';
import Login from './Components/Login';
import Footer from './Components/Footer';
import ParentTable from './Components/ParentTable';
import ChildDashboard from './Components/ChildDashboard';
import StaffRegistrationComponent from './Components/StaffRegistrationComponent'
import AdminComponent from './Components/AdminComponent'
import ParentEdit from './Components/ParentEdit';
import DoctorRegistration from './Components/DoctorRegistration';
import ChildUpdate from './Components/ChildUpdate';
import DoctorDashboard from './Components/DoctorDashboard';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      {/* <HomeComponent/> */}
          <Routes>
              <Route path="/" element={<HomeComponent/>}></Route>
              <Route path="/home" element={<HomeComponent/>}></Route>
              <Route path="/aboutus" element={<AboutUsComponent/>}></Route>
              <Route path="/contactus" element={<ContactUsComponent/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/logout" element={<LogOutComponent/>}></Route>
              <Route path="/childregister" element={<Childregistration/>}></Route>
              <Route path="/parentregister" element={<Parentregistration/>}></Route>
              <Route path="/doctorregister" element={<DoctorRegistration/>}></Route>
              <Route path="/parenttable" element={<ParentTable/>}></Route>
              <Route path="/childdashboard" element={<ChildDashboard/>}></Route>
              <Route path="/doctordashboard" element={<DoctorDashboard/>}></Route>
              <Route path="/admin" element={<AdminComponent/>}></Route>
              <Route path="/staffregister" element={<StaffRegistrationComponent/>}></Route>
              {/* <Route path="/update/:id" element={<ParentEdit/>}></Route> */}
              <Route path="/update/:id" element={<ChildUpdate/>}></Route>
          </Routes>
          <Footer/>
          {/* </Footer> */}
    </div>
  );
}

export default App;