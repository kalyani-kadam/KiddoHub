import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const SignUp = () => {
  return (
    <div style={{ paddingTop: '160px', background: '#313842' }}>
      <div style={{ padding: '30px', textAlign: 'center', color: '#fafcfb', textShadow: '1px 1px 2px #0000' }}>
        <h1 style={{ fontFamily: 'cursive', fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
        👼A Second Home for Your Little One!🎉
        </h1>
        <p style={{ fontSize: '2.5rem' }}>
          KiddoHub  is more than just a daycare; it's a second home for your child. We understand the trust you place in us, 
          and we are dedicated to creating a warm, welcoming atmosphere where your child feels loved and valued 😊
        </p>
        <p>Choose Your Role</p>
      </div>

      <Container>
        <Row className="mb-5">
          <Col sm={5}>
            <h3><Link to='/parentregister'> Custodian (aka Parent)</Link></h3>
            <div className="img-wrapper">
              <Link to="/parentregister">
                <img className="inner-img img-fluid" src="./images/parent1.png" alt="Parent" />
              </Link>
            </div>
          </Col>
          <Col sm={5}>
            <h3><Link to='/childregister'> Youngster (aka children)</Link></h3>
            <div className="img-wrapper">
              <Link to="/childregister">
                <img className="inner-img img-fluid" src="./images/child11.png" alt="Child"/>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;