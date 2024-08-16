import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ParentService from "../service/ParentService";
import '../Style/sidebar.css'

const ParentRegistration = () => {
    const [formdetails, setFormdetails] = useState({ address: "", emailId: "", name: "", phoneNo: "", password: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormdetails({ ...formdetails, [name]: value });
    };

    const validate = () => {
        let formErrors = {};
        let valid = true;

        // Name validation
        if (!formdetails.name) {
            formErrors.name = "Name is required";
            valid = false;
        }

        // Phone Number validation
        const phonePattern = /^[0-9]{10}$/;
        if (!formdetails.phoneNo) {
            formErrors.phoneNo = "Phone number is required";
            valid = false;
        } else if (!phonePattern.test(formdetails.phoneNo)) {
            formErrors.phoneNo = "Phone number must be 10 digits";
            valid = false;
        }

        // Address validation
        if (!formdetails.address) {
            formErrors.address = "Address is required";
            valid = false;
        }

        // Email validation
        const emailPattern = /\S+@\S+\.\S+/;
        if (!formdetails.emailId) {
            formErrors.emailId = "Email is required";
            valid = false;
        } else if (!emailPattern.test(formdetails.emailId)) {
            formErrors.emailId = "Email is invalid";
            valid = false;
        }

        // Password validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!formdetails.password) {
            formErrors.password = "Password is required";
            valid = false;
        } else if (!passwordPattern.test(formdetails.password)) {
            formErrors.password = "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const addParent = (e) => {
        e.preventDefault();
        if (validate()) {
            ParentService.addparent(formdetails)
                .then((result) => {
                    console.log(result);
                    setFormdetails({ address: "", emailId: "", name: "", phoneNo: "", password: "" });
                    navigate("/childregister");
                })
                .catch((error) => {
                    console.log("Something went wrong: " + error.response);
                });
        }
    };

    return (
        <div className='container'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/tables.css" rel="stylesheet" media="all" />
            <div>
                {/* <body> */}
                <div class="sidebar">
                    <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
                    <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                    <a href="/rules"><i class="fa fa-fw fa-square"></i> Rules </a>
                    <a href="/aboutus"><i class="fa fa-fw fa-child"></i> About Us </a>
                    <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                </div>
                {/* </body> */}
            </div>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Parent Registration</h2>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Name </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter name'
                                            value={formdetails.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Phone Number </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='phoneNo'
                                            className='form-control'
                                            placeholder='Enter phone number'
                                            value={formdetails.phoneNo}
                                            onChange={handleChange}
                                        />
                                        {errors.phoneNo && <small className="text-danger">{errors.phoneNo}</small>}
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Address </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='address'
                                            className='form-control'
                                            placeholder='Enter address'
                                            value={formdetails.address}
                                            onChange={handleChange}
                                        />
                                        {errors.address && <small className="text-danger">{errors.address}</small>}
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Email Id</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='emailId'
                                            className='form-control'
                                            placeholder='Enter email Id'
                                            value={formdetails.emailId}
                                            onChange={handleChange}
                                        />
                                        {errors.emailId && <small className="text-danger">{errors.emailId}</small>}
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
                                            value={formdetails.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <small className="text-danger">{errors.password}</small>}
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button type="submit" className='btn btn-primary' onClick={addParent}>Submit</button>
                                </div>
                                <p>Have an account <a href="/login">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentRegistration;