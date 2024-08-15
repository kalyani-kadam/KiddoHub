import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/home.css';
import { hover } from "@testing-library/user-event/dist/hover";

export default function HomeComponent() {
  const bgColor = "#fff"; // Set navbar background to white
  const mainpanel = {
    margin: '0',
    paddingTop: '90px', // Adjust to match the height of the Navbar
    paddingLeft:'0px'
  };
  const brandStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#000', // Set brand text to black
    fontFamily: 'Comic Sans MS, Arial, sans-serif',
    letterSpacing: '1.5px',
  };
  const navLinkStyle = {
    fontSize: '1.2rem',
    color: '#000', // Set nav links to black
    margin: '0 10px',
    fontWeight: '500',
  }
  const buttonStyle = {
    marginRight: '15px',
    backgroundColor: '#ff6f61',
    borderColor: '#ff6f61',
    fontWeight: 'bold',
  };
  const heroStyle = {
    // background: "url('https://images.unsplash.com/photo-1584466990055-8942d83d384e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center",
    // background:"url(https://files.oaiusercontent.com/file-5piu2scB1nZsZmhkj9oQbFlu?se=2024-08-15T15%3A51%3A45Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D11599e59-5e88-40f8-9e31-cd75392908c8.webp&sig=Ej92zKqEJz2mcNL9R0dYkKRSa0x8T1T3JGlDlNr9TP4%3D)",
    backgroundSize: 'cover',
    height: 'calc(100vh - 70px)', // Full viewport height minus navbar height
    width:'100%',
    color: '#000', // Set hero text color to black
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: 0.9
  };
  const heroTextStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(255,255,255,0.7)', // Lighter text shadow for better contrast on white
  };
  const subHeroTextStyle = {
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px rgba(255,255,255,0.7)', // Lighter text shadow for better contrast on white
    marginBottom: '20px',
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
            <Nav className="align-self-end">
              <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="/aboutus" style={navLinkStyle}>About Us</Nav.Link>
              <Nav.Link href="/contactus" style={navLinkStyle}>Contact Us</Nav.Link>
              <Nav.Link href="/rules" style={navLinkStyle}>Rules</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-dark" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
              <Button variant="outline-dark" className="ml-2" style={buttonStyle} onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      {/* <Container> */}
      <div style={mainpanel}>
        <div style={heroStyle}>
          <div style={heroTextStyle}>Welcome to Kiddohub</div>
          <div style={subHeroTextStyle}>A safe and joyful place for your child's growth</div>
          <Button variant="dark" style={buttonStyle} onClick={handleSignUpClick}>Get Started</Button>
        </div>
      </div>
      {/* </Container> */}
    </>
  );
}
