import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function HomeComponent() {
  const bgColor = "#2d3030";
  const buttonStyle = {
    marginRight: '15px',
  };
  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#382d2d',
    fontFamily: 'Arial, sans-serif', // You can use any font-family you prefer
    letterSpacing: '1px',
  };
  const navigate = useNavigate();
  
  function handleSignUpClick() {
    navigate("/signup");
  }
  
  function handleLoginClick() {
    navigate("/login");
  }
  
  return (
    <>
      <Navbar style={{ backgroundColor: bgColor }} variant="light" fixed="top">
        <Container>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Navbar.Brand style={brandStyle}>
              Kiddohub
            </Navbar.Brand>
            <Nav className="align-self-end fs-4" variant='tabs'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-light" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
              <Button variant="outline-light" className="ml-2" onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <br />
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid" src="https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide"></img>
          </div>
        </div>
      </div>
    </>
  );
}
