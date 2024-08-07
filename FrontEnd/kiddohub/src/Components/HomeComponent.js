import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import "../"
export default function HomeComponent() {

  /* return (
     <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="#">KiddoHub</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav">
             <li class="nav-item active">
               <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">AboutUs</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">ContactUs</a>
             </li>
             <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Dropdown link
               </a>
               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <a class="dropdown-item" href="#">Action</a>
                 <a class="dropdown-item" href="#">Another action</a>
                 <a class="dropdown-item" href="#">Something else here</a>
               </div>
             </li>
             <button type="button" class="btn btn-success" id="loginbtn">Login</button>
           </ul>
         </div>
       </nav>
 
       <body>
         <div id="SimpleCarouselExample" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
             <div class="carousel-item active">
               <img src="https://img.freepik.com/premium-photo/top-view-kindergarten-children-during-art-lesson_290431-26297.jpg?size=626&ext=jpg" class="d-block w-100" alt="..."></img>
             </div>
             <div class="carousel-item">
               <img src="https://img.freepik.com/free-photo/teacher-helping-kid-paint_23-2148673170.jpg?size=626&ext=jpg" class="d-block w-100" alt="..."></img>
             </div>
             <div class="carousel-item">
               <img src="https://img.freepik.com/premium-photo/top-view-kindergarten-children-during-art-lesson_290431-26297.jpg?size=626&ext=jpg" class="d-block w-100" alt="..."></img>
             </div>
           </div>
           <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="sr-only"></span>
           </a>
           <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="sr-only"></span>
           </a>
         </div>
       </body>
 
     </div>
   )*/
  const bgColor = "#2d3030";
  const buttonStyle = {
    marginRight: '15px', // Adjust the right margin as needed
  };
  const navigate = useNavigate();
  function handleSignUpClick() {
    navigate("/signup");
  };
  function handleLoginClick() {
    navigate("/login")
  };
  return (
    <>
      <Navbar style={{ backgroundColor: bgColor }} variant="dark" fixed="top">
        <Container>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Navbar.Brand>
              <img
                src="/logo.jpg"
                width="200"
                className="h-auto d-inline-block align-top mr-3"
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="align-self-end fs-4" variant='tabs'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-light" style={buttonStyle} onClick={handleSignUpClick}>Sign-Up</Button>
              <Button variant="outline-light" className="ml-2" onClick={handleLoginClick}>Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <br />
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://img.freepik.com/free-photo/teacher-helping-kid-paint_23-2148673170.jpg?size=626&ext=jpg" alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://img.freepik.com/free-photo/teacher-helping-kid-paint_23-2148673170.jpg?size=626&ext=jpg" alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://img.freepik.com/premium-photo/top-view-kindergarten-children-during-art-lesson_290431-26297.jpg?size=626&ext=jpg" alt="Third slide"></img>
          </div>
        </div>
      </div>
    </>
  );
}