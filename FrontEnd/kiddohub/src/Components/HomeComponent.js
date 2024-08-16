import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/home.css';

export default function HomeComponent() {
  const navigate = useNavigate();
  
  function handleSignUpClick() {
    navigate("/signup");
  }
  
  function handleLoginClick() {
    navigate("/login");
  }
  
  return (
    <>
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
              <Button variant="outline-dark" onClick={handleSignUpClick}>Sign-Up</Button>&nbsp;
              <Button variant="outline-dark" className="ml-2" onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="hero" style={{ backgroundImage: `url('https://files.oaiusercontent.com/file-5piu2scB1nZsZmhkj9oQbFlu?se=2024-08-15T15%3A51%3A45Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D11599e59-5e88-40f8-9e31-cd75392908c8.webp&sig=Ej92zKqEJz2mcNL9R0dYkKRSa0x8T1T3JGlDlNr9TP4%3D')` }}>
        <div className="hero-text">Welcome to Kiddohub</div>
        <div className="sub-hero-text">A safe and joyful place for your child's growth</div>
        <Button variant="dark" onClick={handleSignUpClick}>Get Started</Button>
      </div>
    </>
  );
}
