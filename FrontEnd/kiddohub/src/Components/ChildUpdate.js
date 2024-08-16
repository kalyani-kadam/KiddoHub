import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ChildService from "../service/ChildService";

const ChildUpdate = () => {
    // const { childId } = useParams(); // Assume the route includes a childId paramete
    const [formdetails, setformdetails] = useState({
        childId: "",
        emergencyContact: "",
        allergies: "",
        dateOfBirth: "",
        emailId: "",
        medicalInfo: "",
        name: "",
        gender: "",
        password: "",
        parent: "",
        childRegStatusEnum: "PENDING"
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformdetails({ ...formdetails, [name]: value });
        // setformdetails({ ...formdetails, childId: childId || formdetails.childId });
    };

    const validate = () => {
        const errors = {};
        if (!formdetails.name) errors.name = "Name is required";
        if (!formdetails.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
        if (!formdetails.gender) errors.gender = "Gender is required";
        if (!formdetails.allergies) errors.allergies = "Allergies are required";
        if (!formdetails.medicalInfo) errors.medicalInfo = "Medical information is required";
        if (!formdetails.emailId) errors.emailId = "Email ID is required";
        if (!formdetails.password) errors.password = "Password is required";
        if (!formdetails.parent) errors.parent = "Parent ID is required";

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;
        if (!formdetails.emergencyContact) {
            errors.emergencyContact = "Phone number is required";
        } else if (!phonePattern.test(formdetails.emergencyContact)) {
            errors.emergencyContact = "Phone number must be 10 digits";
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

    const updateChild = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("In update Child");
        const data = { ...formdetails };
        // console.log(data);
        ChildService.updatechild(data)
            .then((result) => {
                console.log(result);
                setformdetails({
                    childId: "",
                    emergencyContact: "",
                    allergies: "",
                    dateOfBirth: "",
                    emailId: "",
                    medicalInfo: "",
                    name: "",
                    gender: "",
                    password: "",
                    parent: "",
                    childRegStatusEnum: ""
                });
                navigate("/login");
            })
            .catch((error) => {
                console.error("Something went wrong", error.response);
            });
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
                            <h2 className='text-center'>Child Registration Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => { e.preventDefault(); updateChild(); }}>
                                {Object.keys(errors).length > 0 && (
                                    <div className='alert alert-danger'>
                                        {Object.values(errors).map((error, index) => (
                                            <p key={index}>{error}</p>
                                        ))}
                                    </div>
                                )}

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>childId</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='childId'
                                            className='form-control'
                                            placeholder='Enter id'
                                            value={formdetails.childId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
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
                                    <label className='col-md-3 control-label'>Date of Birth</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='date'
                                            name='dateOfBirth'
                                            className='form-control'
                                            placeholder='Enter date of birth'
                                            value={formdetails.dateOfBirth}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Gender</label>
                                    <div className='col-md-9'>
                                        <select
                                            name='gender'
                                            className='form-control'
                                            value={formdetails.gender}
                                            onChange={handleChange}
                                        >
                                            <option value='' disabled>Select gender</option>
                                            <option value='MALE'>MALE</option>
                                            <option value='FEMALE'>FEMALE</option>
                                            <option value='OTHER'>OTHER</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>childRegStatusEnum</label>
                                    <div className='col-md-9'>
                                        <select
                                            name='childRegStatusEnum'
                                            className='form-control'
                                            value={formdetails.childRegStatusEnum}
                                            onChange={handleChange}
                                        >
                                            <option value='PENDING' disabled> childRegStatusEnum</option>
                                            {/* <option value='MALE'>MALE</option>
                                            <option value='FEMALE'>FEMALE</option>
                                            <option value='OTHER'>OTHER</option> */}
                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Allergies</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='allergies'
                                            className='form-control'
                                            placeholder='Enter allergies'
                                            value={formdetails.allergies}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Medical Information</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='medicalInfo'
                                            className='form-control'
                                            placeholder='Enter medical information'
                                            value={formdetails.medicalInfo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Emergency Contact</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='emergencyContact'
                                            className='form-control'
                                            placeholder='Enter emergency contact'
                                            value={formdetails.emergencyContact}
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
                                    <label className='col-md-3 control-label'>Parent Id</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='parent'
                                            className='form-control'
                                            placeholder='Enter parent ID'
                                            value={formdetails.parent}
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

export default ChildUpdate;
