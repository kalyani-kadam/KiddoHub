import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import AboutUsComponent from './Components/About';
import ContactUsComponent from './Components/Contact';
import SignUp from './Components/SignUp';
import LogOutComponent from './Components/LogOutComponent';
import SignIn from './Components/SignIn';
import Childregistration from './Components/Childregistration';
import Parentregistration from './Components/ParentRegisration';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ParentTable from './Components/ParentTable';

function App() {
  return (
    <div>
      {/* <Header></Header> */}
          <Routes>
              <Route path="/" element={<HomeComponent/>}></Route>
              <Route path="/home" element={<HomeComponent/>}></Route>
              <Route path="/aboutus" element={<AboutUsComponent/>}></Route>
              <Route path="/contactus" element={<ContactUsComponent/>}></Route>
              {/* <Route path="/login" element={<SignIn/>}></Route> */}
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/logout" element={<LogOutComponent/>}></Route>
              <Route path="/childregister" element={<Childregistration/>}></Route>
              <Route path="/parentregister" element={<Parentregistration/>}></Route>
              <Route path="/parenttable" element={<ParentTable/>}></Route>
          </Routes>
          <Footer/>
          {/* </Footer> */}
    </div>
  );
}

export default App;