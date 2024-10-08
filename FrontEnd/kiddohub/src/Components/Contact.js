import React from 'react'
// import './Loader.css'
// import '../css/Button.css'
import '../css/contact.css'

import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import ReactTooltip from 'react-tooltip';

const Contact = () => {
  const navigate = useNavigate();
  
  function handleSignUpClick() {
    navigate("/signup");
  }
  
  function handleLoginClick() {
    navigate("/login");
  }

  const iframe = '<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.238729709174!2d73.75950412391427!3d18.653280246812585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e413287e41%3A0x29d8bfdf427740f2!2s43%2C%20Sector%20No.%2026%2C%20Pradhikaran%2C%20Nigdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411044!5e0!3m2!1sen!2sin!4v1662206951194!5m2!1sen!2sin" width="1000" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
  }

  const copyText1 = () => {
    var copyText = document.getElementById("copytext1");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy1").innerHTML = "copied";
    setTimeout(clearText1, 5000);
  }
  const copyText5 = () => {
    var copyText = document.getElementById("copytext5");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy5").innerHTML = "copied";
    setTimeout(clearText5, 5000);
  }
  const clearText1 = () => {
    document.getElementById("copy1").innerHTML = "";
  }
  const clearText2 = () => {
    document.getElementById("copy2").innerHTML = "";
  }
  const clearText3 = () => {
    document.getElementById("copy3").innerHTML = "";
  }
  const clearText4 = () => {
    document.getElementById("copy4").innerHTML = "";
  }
  const clearText5 = () => {
    document.getElementById("copy5").innerHTML = "";
  }
  const copyText2 = () => {
    var copyText = document.getElementById("copytext2");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy2").innerHTML = "copied";
    setTimeout(clearText2, 5000);
  }
  const copyText3 = () => {
    var copyText = document.getElementById("copytext3");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy3").innerHTML = "copied";
    setTimeout(clearText3, 5000);
  }
  const copyText4 = () => {
    var copyText = document.getElementById("copytext4");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy4").innerHTML = "copied";
    setTimeout(clearText4, 5000);
  }
  return (

    <>
      <div className="container">
      <Navbar variant="light" fixed="top">
        <Container>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Navbar.Brand>
              Kiddohub
            </Navbar.Brand>
            <Nav className="align-self-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <Nav.Link href="/rules">Rules</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-dark" onClick={handleSignUpClick}>Sign-Up</Button>
              <Button variant="outline-dark" className="ml-2" onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
        <h2 className="py-3 text-center">Contact</h2>

        <h3>
          For any Queries contact us :
        </h3>
        <ul style={{ color: "blue" }}>
          <li>
            <h4>
              {/* <input value="kiddohub2024@gmail.com" disabled id='copytext1' style={{"border":"none", "width":"400px"}}></input> <a href='mailto:meetyourdoctor007@gmail.com'> 
                        <button style={{ "marginLeft": "0px", "borderRadius": "5px", "fontSize": "12px" }}>Send Email</button></a><p id='copy1'></p>    */}

              <input value="kiddohub2024@gmail.com" disabled id='copytext1' style={{ "border": "none", "width": "400px" }}></input> <a href='mailto:meetyourdoctor007@gmail.com'>
                <button type="button" class="btn btn-primary">Send Email</button></a><p id='copy1'></p>
            </h4>
          </li>
          <li>
            <h4>
              <input value="kadamkalyani.m@gmail.com" disabled id='copytext2' style={{ "border": "none", "width": "400px" }}></input>
              <button type="button" class="btn btn-primary" onClick={copyText2}>Copy</button><p id='copy2'></p>
            </h4>
          </li>
          <li>
            <h4>
              <input value="kshitijakurhade@gmail.com" disabled id='copytext5' style={{ "border": "none", "width": "400px" }}></input>
              <button type="button" class="btn btn-primary" onClick={copyText5}>Copy</button><p id='copy5'></p>
            </h4>
          </li>
        </ul>
        <p><h3>Call Us :</h3><input value="+917020984647" disabled id='copytext3' style={{ "border": "none", "width": "400px" }}></input>
          <button type="button" class="btn btn-primary" onClick={copyText3}>Copy</button> </p><p id='copy3'></p>
        <p><input value="+918149141899" disabled id='copytext4' style={{ "border": "none", "width": "400px" }}></input>
          <button type="button" class="btn btn-primary" onClick={copyText4}>Copy</button> </p><p id='copy4'></p>
        {/* <ReactTooltip id='address_tooltip' delayShow={1000}>Click to see Address</ReactTooltip> */}
        <details>
          <summary data-tip data-for="address_tooltip">Our Office Address:</summary>
          <p>43
            Sector No. 26, Pradhikaran, Nigdi
            Pimpri-Chinchwad, Maharashtra 411044</p>
        </details>
        <Iframe iframe={iframe}></Iframe><br /><br /><br /><br /><br />
        <p style={{ "marginLeft": "40px" }}></p>
      </div>
    </>
  )
}

export default Contact