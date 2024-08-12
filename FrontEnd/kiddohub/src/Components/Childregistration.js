import React from "react";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ChildService from "../service/ChildService";

const ChildRegistration = () => {

    const [formdetails, setformdetails] = useState({emergencyContact: "",allergies:"",dateOfBirth:"", emailId: "",medicalInfo:"", name: "",gender:"", password: "" ,parentId:""})
    var navigate = useNavigate();

    const handlechange = (event) => {
        var name = event.target.name;
        setformdetails({ ...formdetails, [name]: event.target.value })
    }

    const addchild = () => {
        if(formdetails.emergencyContact==="" ||formdetails.name==="" || formdetails.dateOfBirth==="" || formdetails.phoneNo==="" 
            ||formdetails.medicalInfo==="" || formdetails.gender==="" || formdetails.emailId==="" || formdetails.password===""){
            alert("Please fill all details")
            return;
        }

        const validateEmail = (e) => {
            let email = e.target.value;
            let emailRegex = new RegExp(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/);
            if (emailRegex.test(email) === true) {
                setError({ ...Error, user_name_error: "" });
                setFlag({ ...flag, email: true });
    
            }
            else {
                setError({ ...Error, user_name_error: "Email format should be 'abc@gmail.com' and it can include (A-Z a-z 0-9 . _ -)" });
                setFlag({ ...flag, email: false });
    
            }
        }

        const validatePassword = (e) => {
            let pass = e.target.value;
            let passRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,16}$/);
            if (passRegex.test(pass) === true) {
                // alert("true");
                setError({ ...Error, password_error: "" });
                setFlag({ ...flag, password: true });
    
            }
            else {
                // alert("false");
                setError({ ...Error, password_error: "Password must be alphanumeric and should contains at least a special character with min length 8 and max length 16" });
                setFlag({ ...flag, password: false });
    
            }
        }
        const validateMobileNumber = (e) => {
            let mobileNumber = e.target.value;
            let mnRegex = new RegExp(/^[0-9]{10}$/);
            // if (mnRegex.test(mobileNumber) === true)
            if (mobileNumber.length > 15) {
                setError({ ...Error, mobile_number_error: "" });
                setFlag({ ...flag, mobileNumber: true });
    
            }
            else {
                setError({ ...Error, mobile_number_error: "Enter Correct Mobile No" });
                setFlag({ ...flag, mobileNumber: false });
    
            }
        }
    
        const validateDob = (e) => {
            let dob = e.target.value;
            if (dob === "") {
                setError({ ...Error, dob_error: "Please enter BirthDate" });
                setFlag({ ...flag, dob: false });
    
            }
            else {
                setError({ ...Error, dob_error: "" });
                setFlag({ ...flag, dob: true });
    
            }
        }
        console.log("in addchild");
        ChildService.addchild(formdetails)
            .then((result) => {
                console.log(result);
                setformdetails({emergencyContact:"",allergies:"",dateOfBirth:"", emailId: "",medicalInfo:"", name: "",gender:"", password: "" ,parentId:""})
                navigate("/login")
            })
            .catch((error) => {
                console.log("something went wrong" + error.response);
            });
    }
  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'> Child Registration Form </h2>
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
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Date of birth </label>
                                <div className='col-md-9'>
                                    <input
                                        type='date'
                                        name='dateOfBirth'
                                        className='form-control'
                                        placeholder='Enter date of birth'
                                        value={formdetails.dateOfBirth}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="gender">
                                    <option disabled="disabled" selected="selected" placeholder="gender" value={formdetails.gender} onChange={handlechange}>Gender</option>
                                    <option value="MALE">MALE </option>
                                    <option value="FEMALE">FEMALE</option>
                                    <option value="OTHER">OTHER</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Allergies </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='allergies'
                                        className='form-control'
                                        placeholder='Enter allergies'
                                        value={formdetails.allergies}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Medical Information</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='medicalInfo'
                                        className='form-control'
                                        placeholder='Enter medicalInfo'
                                        value={formdetails.medicalInfo}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Emergency Contact</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='emergencyContact'
                                        className='form-control'
                                        placeholder='Enter emergencyContact'
                                        value={formdetails.emergencyContact}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Email Id</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='emailId'
                                        className='form-control'
                                        placeholder='Enter email address'
                                        value={formdetails.emailId}
                                        onChange={handlechange}
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
                                        value={formdetails.password}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Parent Id </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='parentId'
                                        className='form-control'
                                        placeholder='Enter parentId'
                                        value={formdetails.parentId}
                                        onChange={handlechange}
                                    >
                                    </input>
                                </div>
                            </div>
                            {/* <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="gender">
                                    <option disabled="disabled" selected="selected" placeholder="childRegStatusEnum"  onChange={handleInputChange}>childRegStatusEnum</option>
                                    <option>APPROVED </option>
                                    <option>REJECTED</option>
                                    <option>PENDING</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div> */}
                            <div className='form-group mb-3'>
                                <button type="button" className='btn btn-primary' onClick={ (e) => addchild(e)}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ChildRegistration;

