import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const SignUp = () => {
  return (
    
    <div style={{ paddingTop: '160px', background: '#313842' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

{/* <!-- sidebar CSS--> */}
<link href="Style/sidebar.css" rel="stylesheet" media="all" />
<link href="Style/tables.css" rel="stylesheet" media="all" />

<Link to="/parentregister">
    <button type="button" name="btn" id="btn" className="btn btn-primary">Add Parent</button>
</Link>&nbsp;&nbsp;
<Link to="/login">
    <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
</Link>
<br></br><br></br>
<div>
    <body>
        <div class="sidebar">
            <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
            <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
            <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
            <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
            <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activities</a>

        </div>
    </body>
</div>
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