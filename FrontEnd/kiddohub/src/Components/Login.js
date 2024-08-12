// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import '../css/Login.css'; // For additional custom styling if needed


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle login logic here
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <div style={{ paddingTop: '160px', background: '#313842'}}>
//         <Container>
//             <Row className="justify-content-md-center mt-5">
//                 <Col md={6}>
//                     <h2>Login</h2>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 placeholder="Enter email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                         </Form.Group>
//                         <br />
//                         {/* <div className="d-flex justify-content-center">
//                             <Button variant="primary" type="submit">
//                                 Login
//                             </Button>
//                         </div> */}
//                         <div className="d-flex justify-content-center">
//                         <Button as="a" variant="primary" type="submit" className="w-100">
//                             Login
//                         </Button>
//                         </div> 
//                         <br/>
//                         <p>Don't have an account  <a href="./signup">register</a></p>
                        
//                         {/* <br /> */}
//                         {/* <br />
//                         <div className="d-flex justify-content-center">
//                         <Button as="a" variant="primary" type="submit" className="w-100">
//                             Login
//                         </Button>
//                         </div> */}
//                         {/* <Row className="justify-content-center">
//                             <Col md="auto">
//                                 <Button variant="primary">Login</Button>
//                             </Col>
//                         </Row> */}
//                     </Form>
//                     {/* <div className="social mt-3">
//                         <div className="go btn btn-danger w-100 mb-2">
//                             <FontAwesomeIcon icon={faGoogle} /> Google
//                         </div>
//                         <div className="fb btn btn-primary w-100">
//                             <FontAwesomeIcon icon={faFacebook} /> Facebook
//                         </div>
//                     </div> */}
//                 </Col>
//             </Row>
//         </Container >
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLoginForm(e){

        e.preventDefault();

        console.log(username);
        console.log(password);

    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'> Login Form </h2>
                    </div>

                    <div className='card-body'>
                        <form>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Username or Email</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        placeholder='Enter username'
                                        value={username}
                                        onChange={ (e) => setUsername(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Password </label>
                                <div className='col-md-9'>
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter password'
                                        value={password}
                                        onChange={ (e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={ (e) => handleLoginForm(e)}>Submit</button>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default Login