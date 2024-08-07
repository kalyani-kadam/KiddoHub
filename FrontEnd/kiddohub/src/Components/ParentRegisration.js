// import React from "react";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// import ParentService from "../service/ParentService";

// function ParentRegistration() {

//     const navigate = useNavigate(); // Initialize useHistory

//     const [formData, setFormData] = useState({
//         name: "",
//         birthday: "",
//         gender: "",
//         email: "",
//         password: "",
//         mobilenumber: "",
//         address: "",
//         userbudget: ""
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const user = {
//             name: formData.name,
//             birthday: formData.birthday,
//             gender: formData.gender,
//             email: formData.email,
//             password: formData.password,
//             mobilenumber: formData.mobilenumber,
//             address: formData.address,
//             userbudget: formData.userbudget        
//         };
//         //create 
//         ParentService
//             .addparent(formData)
//             .then((response) => {
//                 console.log("parent added successfully", response.formData);
//                 navigate('/');
//             })
//             .catch((error) => {
//                 console.log("something went wrong" + error.response);
//             });

//         setFormData({
//             photo: null,
//             name: "",
//             birthday: "",
//             gender: "",
//             email: "",
//             password: "",
//             mobilenumber: "",
//             address: "",
//             userbudget: ""
//         });
//     }
//     return (
//         <>
//             <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
//             <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
//             {/* <!-- Font special for pages--> */}
//             <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />

//             {/* <!-- Vendor CSS--> */}
//             <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
//             <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all" />

//             {/* <!-- Main CSS--> */}
//             {/* <link href="../css/registration.css" rel="stylesheet" media="all"></link> */}
//             <link href="./css/registration.css" rel="stylesheet" media="all"></link>
//             <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
//                 <div class="wrapper wrapper--w960">
//                     <div class="card card-2">
//                         <div class="card-heading"></div>
//                         <div class="card-body">
//                             <h2 class="title">Parent Registration</h2>
//                             <form method="POST">

//                                 <div class="input-group">
//                                     <input class="input--style-2" type="text" placeholder="Name" name="name" onChange={handleInputChange} required />
//                                 </div>
//                                 {/* <div class="row row-space"> */}
//                                 {/* <div class="col-2">
//                                 <div class="input-group">
//                                     <input class="input--style-2 js-datepicker" type="date" placeholder="Birthdate"    onChange={handleInputChange} name="birthday"/>
//                                     <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
//                                 </div>
//                                 </div> */}
//                                 {/* <div class="col-2">
//                                 <div class="input-group">
//                                     <div class="rs-select2 js-select-simple select--no-search">
//                                         <select name="gender">
//                                             <option disabled="disabled" selected="selected "  onChange={handleInputChange} >Gender</option>
//                                             <option>Male</option>
//                                             <option>Female</option>
//                                             <option>Other</option>
//                                         </select>
//                                         <div class="select-dropdown"></div>
//                                     </div>
//                                 </div>
//                                 </div> */}
//                                 {/* </div> */}
//                                 <div class="input-group">
//                                     <input class="input--style-2" type="textarea" placeholder="Address" name="address" onChange={handleInputChange} required />
//                                 </div>
//                                 <div class="input-group">
//                                     <input class="input--style-2" type="text" placeholder="PhoneNo" name="phoneNo" onChange={handleInputChange} required />
//                                 </div>
//                                 <div class="row row-space">
//                                     <div class="col-2">
//                                         <div class="input-group">
//                                             <div class="rs-select2 js-select-simple select--no-search">
//                                                 <input class="input--style-2" type="email" id="email" name="emailId" placeholder="EmailId" onChange={handleInputChange} required />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="col-2">
//                                         <div class="input-group">
//                                             <div class="rs-select2 js-select-simple select--no-search">
//                                                 <input class="input--style-2" type="password" id="password" name="password" placeholder="Password" onChange={handleInputChange} required />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="p-t-30">
//                                     <button class="btn btn--radius btn--green" type="submit" onClick={(e) => handleSubmit(e)}>Register</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Jquery JS--> */}
//             <script src="vendor/jquery/jquery.min.js"></script>
//             {/* <!-- Vendor JS--> */}
//             <script src="/vendor/select2/select2.min.js"></script>
//             <script src="/vendor/datepicker/moment.min.js"></script>
//             <script src="/vendor/datepicker/daterangepicker.js"></script>

//             {/* <!-- Main JS--> */}
//             <script src="./public/js/global.js"></script>

//         </>
//     );
// } export default ParentRegistration;


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ParentService from '../service/ParentService';

const ParentRegistration = () => {
    //   const [name, setName] = useState('');
    //   const [address, setAddress] = useState('');
    //   const [phoneNo, setPhoneNo] = useState('');
    //   const [emailId, setEmailId] = useState('');
    //   const [password, setPassword] = useState('');

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle registration logic here
    //     console.log('Name:', name);
    //     console.log('Address:', address);
    //     console.log('Phone No:', phoneNo);
    //     console.log('Email ID:', emailId);
    //     console.log('Password:', password);
    //   };
    const [formdetails, setformdetails] = useState({ parentId:"",address: "", emailId: "", name: "", phoneNo: "", password: "" })
    var navigate = useNavigate();

    const handlechange = (event) => {
        var name = event.target.name;
        setformdetails({ ...formdetails, [name]: event.target.value })
    }

    const addparent = () => {
        console.log("in addparent");
        ParentService.addparent(formdetails)
            .then((result) => {
                console.log(result);
                setformdetails({parentId:"", address: "", emailId: "", name: "", phoneNo: "", password: "" })
                navigate("/login")
            })
            .catch((error) => {
                console.log("something went wrong" + error.response);
            });
    }

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <h2>Parent Registration</h2>
                    <form>
                        {/* <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={formdetails.name}
                                onChange={handlechange}
                                required
                            />
                        </Form.Group> */}
                        Id:
                        <input type="text" name="parentId" id="parentId" placeholder="Enter your name" value={formdetails.parentId}
                            onChange={handlechange}></input><br />
                        Name:
                        <input type="text" name="name" id="name" placeholder="Enter your name" value={formdetails.parent_id}
                            onChange={handlechange}></input><br />
                        Address:
                        <input type="text" name="address" id="address" placeholder="Enter your address" value={formdetails.parent_id}
                            onChange={handlechange}></input><br />
                        Email Id:
                        <input type="text" name="emailId" id="emailId" placeholder="Enter your emailId" value={formdetails.parent_id}
                            onChange={handlechange}></input><br />
                        Phone no:
                        <input type="text" name="phoneNo" id="phoneNo" placeholder="Enter your phoneNo" value={formdetails.parent_id}
                            onChange={handlechange}></input><br />
                        Password:
                        <input type="password" name="password" id="password" placeholder="Enter your password" value={formdetails.parent_id}
                            onChange={handlechange}></input><br />
                        {/* <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your address"
                                value={formdetails.address}
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNo">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formdetails.phoneNo}
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmailId">
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email ID"
                                value={formdetails.emailId}
                                onChange={handlechange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={formdetails.password}
                                onChange={handlechange}
                                required
                            />
                        </Form.Group> */}
                        <br />
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" onClick={addparent}>
                                SignUp
                            </Button>
                        </div>
                        <br />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default ParentRegistration;

