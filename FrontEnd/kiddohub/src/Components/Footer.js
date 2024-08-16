// import React from 'react'

// const Footer = () => {
//     return (
//         <div>
//             <footer className = "footer">
//                  <span className="text-muted">All Rights Reserved 2024 @Kiddohub</span>
//             </footer>
//         </div>
//     )
// }

// export default Footer

// import React from 'react'
// import { Container, Row, Col, Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// const Footer = () => {

//     return (
//         <footer className="page-footer fixed-bottom bg-light text-dark">
//             <div className="container-fluid">
//                 <p className="text-center">Copyright &copy; kiddohub.co.in</p>
//                 <Col md={5} className="text-center text-md-right">
// //             <h5>Follow Us</h5>
// //             <div className="d-flex justify-content-center justify-content-md-end">
// //               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
// //                 <FontAwesomeIcon icon={faFacebookF} size="2x" />
// //               </a>
// //               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
// //                 <FontAwesomeIcon icon={faTwitter} size="2x" />
// //               </a>
// //               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
// //                 <FontAwesomeIcon icon={faInstagram} size="2x" />
// //               </a>
// //               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
// //                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
// //               </a>
// //             </div>
// //             {/* <p className="mt-2">Follow us on social media for updates and news.</p> */}
// //           </Col>
//                 {/* <p>This website managed and maintained by Meet Your Doctor Team</p> */}
//             </div>
//         </footer>
//     )
// }
// export default Footer

// import React from 'react';
// import { Container, Row, Col, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <footer className="page-footer bg-light text-dark py-4">
//       {/* <Container> */}
//         <Row>          
//           <Col md={4} className="text-center text-md-left">
//             <h5>Kiddohub</h5>
//             <p>Copyright &copy; Kiddohub.co.in</p>
//           </Col>
//           <Col md={4} className="text-center">
//             <h5>Quick Links</h5>
//             <Nav className="flex-column">
//               <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
//               <Nav.Link as={Link} to="/aboutus" className="text-dark">About Us</Nav.Link>
//               <Nav.Link as={Link} to="/contactus" className="text-dark">Contact Us</Nav.Link>
//               {/* <Nav.Link as={Link} to="/signup" className="text-dark">Sign Up</Nav.Link>
//               <Nav.Link as={Link} to="/login" className="text-dark">Log In</Nav.Link> */}
//             </Nav>
//           </Col>
//           <Col md={4} className="text-center text-md-right">
//             <h5>Follow Us</h5>
//             <div className="d-flex justify-content-center justify-content-md-end">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
//                 <FontAwesomeIcon icon={faFacebookF} size="2x" />
//               </a>
//               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </a>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
//                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
//               </a>
//             </div>
//             {/* <p className="mt-2">Follow us on social media for updates and news.</p> */}
//           </Col>
//         </Row>
//       {/* </Container> */}
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import '../css/Footer.css'; // Import the custom CSS file

// const Footer = () => {
//     return (
//         <footer className="page-footer">
//             <Container fluid className="d-flex flex-column align-items-center py-3">
//                 <Row className="w-100">
//                     <Col className="text-center">
//                         <p className="mb-2">Copyright &copy; kiddohub.co.in</p>
//                     </Col>
//                 </Row>
//                 <Row className="w-100">
//                     <Col className="text-center">
//                         <h5 className="mb-2">Follow Us</h5>
//                         <div className="d-flex justify-content-center">
//                             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
//                                 <FontAwesomeIcon icon={faFacebookF} size="lg" />
//                             </a>
//                             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
//                                 <FontAwesomeIcon icon={faTwitter} size="lg" />
//                             </a>
//                             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
//                                 <FontAwesomeIcon icon={faInstagram} size="lg" />
//                             </a>
//                             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2 social-icon">
//                                 <FontAwesomeIcon icon={faLinkedin} size="lg" />
//                             </a>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </footer>
//     );
// }

// export default Footer;


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={6} className="footer-section">
                        <h4>About Us</h4>
                        <p>
                            Kiddohub provides a nurturing environment for your child's growth and development. We ensure a safe and stimulating atmosphere where children can learn and play.
                        </p>
                    </Col>
                    <Col md={6} className="footer-section">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>Email: <a href="mailto:kiddohub2024@gmail.com">kiddohub2024@gmail.com</a></li>
                            <li>Phone: <a href="tel:+917020984647">+91 7020 994 617</a></li>
                            <li>Address: 43, Sector No. 26, Pradhikaran, Nigdi, Pimpri-Chinchwad, Maharashtra 411044</li>
                        </ul>
                    </Col>
                    {/* <Col md={4} className="footer-section"> */}
                        {/* <h4>Follow Us</h4>
                        <div className="social-media">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </div> */}
                    {/* </Col> */}
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <Button variant="outline-light" href="/contactus">Get in Touch</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>&copy; 2024 Kiddohub. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

