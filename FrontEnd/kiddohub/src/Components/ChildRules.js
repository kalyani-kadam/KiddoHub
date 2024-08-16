import React from "react";
import '../css/ChildRules.css'; // Custom CSS file for additional styles
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ChildRules = () => {
    const navigate = useNavigate();
  
    function handleSignUpClick() {
      navigate("/signup");
    }
    
    function handleLoginClick() {
      navigate("/login");
    }
    const rules = [
        "Children must respect their elders and teachers.",
        "Proper hygiene and cleanliness should be maintained.",
        "Regular attendance is mandatory.",
        "Respect towards peers and no bullying is allowed.",
        "Punctuality is essential.",
        "Participation in extracurricular activities is encouraged.",
        "Honesty in all aspects of life is expected.",
        "childs must speak politely to everyone.",
        "Littering is strictly prohibited; childs must use dustbins.",
        "Following instructions from school authorities is necessary.",
        "Participation in national and cultural celebrations is encouraged.",
        "childs must maintain discipline during assemblies.",
        "Bringing expensive items to school is not allowed.",
        "childs should help keep the school premises clean.",
        "Healthy eating habits should be followed.",
        "Respect for the national symbols is a must."
    ];

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
        <div className="container mt-5">
            
            <div className="card shadow-lg p-4">
                <div className="card-body">
                    <h2 className="text-center mb-4">Child Rules</h2>
                    <ul className="list-group list-group-flush">
                        {rules.map((rule, index) => (
                            <li key={index} className="list-group-item">
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChildRules;
