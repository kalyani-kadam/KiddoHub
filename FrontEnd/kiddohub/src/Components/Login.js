import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../css/Login.css'; // For additional custom styling if needed


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <br />
                        {/* <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div> */}
                        <div className="d-flex justify-content-center">
                        <Button as="a" variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                        </div> 
                        <br/>
                        <p>Don't have an account  <a href="./signup">register</a></p>
                        
                        {/* <br /> */}
                        {/* <br />
                        <div className="d-flex justify-content-center">
                        <Button as="a" variant="primary" type="submit" className="w-100">
                            Login
                        </Button>
                        </div> */}
                        {/* <Row className="justify-content-center">
                            <Col md="auto">
                                <Button variant="primary">Login</Button>
                            </Col>
                        </Row> */}
                    </Form>
                    {/* <div className="social mt-3">
                        <div className="go btn btn-danger w-100 mb-2">
                            <FontAwesomeIcon icon={faGoogle} /> Google
                        </div>
                        <div className="fb btn btn-primary w-100">
                            <FontAwesomeIcon icon={faFacebook} /> Facebook
                        </div>
                    </div> */}
                </Col>
            </Row>
        </Container >
    );
};

export default Login;
