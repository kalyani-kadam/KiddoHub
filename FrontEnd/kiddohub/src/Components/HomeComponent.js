// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

// export default function HomeComponent() {
//   const bgColor = "#2d3030";
//   const buttonStyle = {
//     marginRight: '15px',
//   };
//   const brandStyle = {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#382d2d',
//     fontFamily: 'Arial, sans-serif', // You can use any font-family you prefer
//     letterSpacing: '1px',
//   };
//   const navigate = useNavigate();
  
//   function handleSignUpClick() {
//     navigate("/signup");
//   }
  
//   function handleLoginClick() {
//     navigate("/login");
//   }
  
//   return (
//     <>
//       <Navbar style={{ backgroundColor: bgColor }} variant="light" fixed="top">
//         <Container>
//           <div className='d-flex justify-content-between align-items-center w-100'>
//             <Navbar.Brand style={brandStyle}>
//               Kiddohub
//             </Navbar.Brand>
//             <Nav className="align-self-end fs-4" variant='tabs'>
//               <Nav.Link href="/">Home</Nav.Link>
//               <Nav.Link href="/aboutus">About Us</Nav.Link>
//               <Nav.Link href="/contactus">Contact Us</Nav.Link>
//             </Nav>
//             <div className="d-flex ml-auto">
//               <Button variant="outline-light" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
//               <Button variant="outline-light" className="ml-2" onClick={handleLoginClick}>Log-In</Button>
//             </div>
//           </div>
//         </Container>
//       </Navbar>
//       <br />
//       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img className="img-fluid" src="https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide"></img>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";

// export default function HomeComponent() {
//   const bgColor = "#f8f9fa";
//   const mainpanel = {
//     margin:'0',
//   };
//   const brandStyle = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#ff6f61',
//     fontFamily: 'Comic Sans MS, Arial, sans-serif',
//     letterSpacing: '1.5px',
//   };
//   const navLinkStyle = {
//     fontSize: '1.2rem',
//     color: '#ff6f61',
//     margin: '0 10px',
//     fontWeight: '500',
//   };
//   const buttonStyle = {
//     marginRight: '15px',
//     backgroundColor: '#ff6f61',
//     borderColor: '#ff6f61',
//     fontWeight: 'bold',
//   };
//   const heroStyle = {
//     background: "url('https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center",
//     backgroundSize: 'cover',
//     height: '90vh',
//     // width:'100vh',
//     color: '#fff',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//   };
//   const heroTextStyle = {
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//   };
//   const subHeroTextStyle = {
//     fontSize: '1.5rem',
//     textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
//     marginBottom: '20px',
//   };

//   const navigate = useNavigate();
  
//   function handleSignUpClick() {
//     navigate("/signup");
//   }
  
//   function handleLoginClick() {
//     navigate("/login");
//   }
  
//   return (
//     <>
//       <Navbar style={{ backgroundColor: bgColor }} variant="light" fixed="top">
//         <Container>
//           <div className='d-flex justify-content-between align-items-center w-100'>
//             <Navbar.Brand style={brandStyle}>
//               Kiddohub
//             </Navbar.Brand>
//             <Nav className="align-self-end">
//               <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
//               <Nav.Link href="/aboutus" style={navLinkStyle}>About Us</Nav.Link>
//               <Nav.Link href="/contactus" style={navLinkStyle}>Contact Us</Nav.Link>
//             </Nav>
//             <div className="d-flex ml-auto">
//               <Button variant="outline-light" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
//               <Button variant="outline-light" className="ml-2" style={buttonStyle} onClick={handleLoginClick}>Log-In</Button>
//             </div>
//           </div>
//         </Container>
//       </Navbar>
      
//       <body style={mainpanel}>
//       <div style={heroStyle}>
//         <div style={heroTextStyle}>Welcome to Kiddohub</div>
//         <div style={subHeroTextStyle}>A safe and joyful place for your child's growth</div>
//         <Button variant="light" style={buttonStyle} onClick={handleSignUpClick}>Get Started</Button>
//       </div>
//       </body>
//     </>
//   );
// }




import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../css/home.css'
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function HomeComponent() {
  const bgColor = "#f8f9fa";
  const mainpanel = {
    margin: '0',
    paddingTop: '70px', // Adjust to match the height of the Navbar
  };
  const brandStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff6f61',
    fontFamily: 'Comic Sans MS, Arial, sans-serif',
    letterSpacing: '1.5px',
  };
  const navLinkStyle = {
    fontSize: '1.2rem',
    color: '#ff6f61',
    margin: '0 10px',
    fontWeight: '500',
  };
  const buttonStyle = {
    marginRight: '15px',
    backgroundColor: '#ff6f61',
    borderColor: '#ff6f61',
    fontWeight: 'bold',
  };
  const heroStyle = {
    background: "url('https://images.unsplash.com/photo-1533234427049-9e9bb093186d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center",
    backgroundSize: 'cover',
    height: 'calc(100vh - 70px)', // Full viewport height minus navbar height
    width:'100%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    opacity: 0.6
  };
  const heroTextStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };
  const subHeroTextStyle = {
    fontSize: '1.5rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
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
      <Navbar style={{ backgroundColor: bgColor }} variant="dark" fixed="top">
        <Container>
          <div className='d-flex justify-content-between align-items-center w-100'>
          <link href="Style/sidebar.css" rel="stylesheet" media="all" />
          <link href="Style/tables.css" rel="stylesheet" media="all" />
            <Navbar.Brand style={brandStyle}>
              Kiddohub
            </Navbar.Brand>
            <Nav className="align-self-end">
              <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="/aboutus" style={navLinkStyle}>About Us</Nav.Link>
              <Nav.Link href="/contactus" style={navLinkStyle}>Contact Us</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-light" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
              <Button variant="outline-light" className="ml-2" style={buttonStyle} onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      
      <div style={mainpanel}>
        <div style={heroStyle}>
          <div style={heroTextStyle}>Welcome to Kiddohub</div>
          <div style={subHeroTextStyle}>A safe and joyful place for your child's growth</div>
          <Button variant="light" style={buttonStyle} onClick={handleSignUpClick}>Get Started</Button>
        </div>
      </div>
    </>
  );
}
