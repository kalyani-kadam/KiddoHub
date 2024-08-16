import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import '../css/signup.css';

const SignUp = () => {
  const backgroundcolor = {
    backgroundcolor: "#fafcfb"
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
    <div style={{ paddingTop: '160px', background: '#fcfcfc' }}>
         
      <div style={{ padding: '30px', textAlign: 'center', color: '#261d1d', textShadow: '1px 1px 2px #0000' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          👼A Second Home for Your Little One!🎉
        </h1>
        <p style={{ fontSize: '2.5rem' }}>
          KiddoHub  is more than just a daycare; it's a second home for your child. We understand the trust you place in us,
          and we are dedicated to creating a warm, welcoming atmosphere where your child feels loved and valued 😊
        </p>
        <h3>Choose Your Role</h3>
        <Container style={backgroundcolor}>
          <Row className="mb-5">
            <Col sm={5}>
              <h3><Link to='/parentregister'> Custodian </Link></h3>
              <div className="img-wrapper">
                <Link to="/parentregister">
                  <img className="inner-img img-fluid" src="./images/parent1.png" alt="Parent" />
                </Link>
              </div>
            </Col>
            <Col sm={5}>
              <h3><Link to='/childregister'> Youngster </Link></h3>
              <div className="img-wrapper">
                <Link to="/childregister">
                  <img className="inner-img img-fluid" src="./images/child11.png" alt="Child" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    </>
  );
};

export default SignUp;