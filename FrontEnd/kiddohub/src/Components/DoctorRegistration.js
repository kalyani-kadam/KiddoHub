import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import DoctorService from "../service/DoctorService";

const DoctorRegistration = () => {
    const [formdetails, setformdetails] = useState({
        phoneNo: "",
        emailId: "",
        name: "",
        specialization:"",
        password: "",
        childId: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformdetails({ ...formdetails, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formdetails.name) errors.name = "Name is required";
        if (!formdetails.specialization) errors.specialization = "specialization are required";
        if (!formdetails.emailId) errors.emailId = "Email ID is required";
        if (!formdetails.password) errors.password = "Password is required";
        if (!formdetails.childId) errors.childId = "childId ID is required";

        // Phone validation
        const phonePattern = /^[0-9]{10}$/; 
        if (!formdetails.phoneNo) {
            errors.phoneNo = "Phone number is required";
        } else if (!phonePattern.test(formdetails.phoneNo)) {
            errors.phoneNo = "Phone number must be 10 digits";
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formdetails.emailId && !emailPattern.test(formdetails.emailId)) {
            errors.emailId = "Invalid email format";
        }

        // Password validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (formdetails.password && !passwordPattern.test(formdetails.password)) {
            errors.password = "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character";
        }

        return errors;
    };

    const adddoctor = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("In addchildId");
        const data = { ...formdetails };
        // console.log(data);
        DoctorService.adddoctor(data)
            .then((result) => {
                console.log(result);
                setformdetails({
                    phoneNo: "",
                    specialization: "",
                    emailId: "",
                    name: "",
                    password: "",
                    childId: ""
                });
                navigate("/login");
            })
            .catch((error) => {
                console.error("Something went wrong", error.response);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setformdetails({
            phoneNo: "",
            specialization: "",
            emailId: "",
            name: "",
            password: "",
            childId: ""
        });
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Doctor Registration Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => { e.preventDefault(); adddoctor(); }}>
                                {Object.keys(errors).length > 0 && (
                                    <div className='alert alert-danger'>
                                        {Object.values(errors).map((error, index) => (
                                            <p key={index}>{error}</p>
                                        ))}
                                    </div>
                                )}
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Name</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            placeholder='Enter name'
                                            value={formdetails.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>specialization</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='specialization'
                                            className='form-control'
                                            placeholder='Enter specialization'
                                            value={formdetails.specialization}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Phone No</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='phoneNo'
                                            className='form-control'
                                            placeholder='Enter Phone number'
                                            value={formdetails.phoneNo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Email Id</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='emailId'
                                            className='form-control'
                                            placeholder='Enter email address'
                                            value={formdetails.emailId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Password</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='password'
                                            name='password'
                                            className='form-control'
                                            placeholder='Enter password'
                                            value={formdetails.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>child Id</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='childId'
                                            className='form-control'
                                            placeholder='Enter child ID'
                                            value={formdetails.childId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='form-group mb-3'>
                                    <button
                                        type="submit"
                                        className='btn btn-primary'
                                    >
                                        Submit
                                    </button>
                                    {"   "}
                                    <button type="submit" className='btn btn-danger' onClick={reset}>Reset</button>
                                </div>
                                <p>Have an account? <a href="/login">Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorRegistration;
