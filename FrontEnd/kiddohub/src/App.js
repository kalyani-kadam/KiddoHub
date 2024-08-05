import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Routes,Route} from 'react-router-dom'
import HomeComponent from './Components/HomeComponent';
import AboutUsComponent from './Components/AboutUsComponent';
import ContactUsComponent from './Components/ContactUsComponent';
import SignInComponent from './Components/SignInComponent';
import SignUpComponent from './Components/SignUpComponent';
import LogOutComponent from './Components/LogOutComponent';

function App() {
  return (
    <div>
          <Routes>

              <Route path="/home" element={<HomeComponent/>}></Route>
              <Route path="/aboutus" element={<AboutUsComponent/>}></Route>
              <Route path="/contactus" element={<ContactUsComponent/>}></Route>
              <Route path="/signin" element={<SignInComponent/>}></Route>
              <Route path="/signup" element={<SignUpComponent/>}></Route>
              <Route path="/logout" element={<LogOutComponent/>}></Route>
          </Routes>
    </div>
  );
}

export default App;
