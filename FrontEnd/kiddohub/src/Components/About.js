import React from 'react';
import '../css/About.css';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const About = () => {

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
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                    At Kiddohub, we believe in nurturing creativity, curiosity, and learning in every child. Our mission is to provide a safe,
                    engaging, and fun environment where children can explore their interests, develop new skills, and make lifelong memories.
                </p>

                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Kalyani Kadam</li>
                        <li>Kshitija Kurhade</li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default About;
