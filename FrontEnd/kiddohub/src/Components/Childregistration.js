// // import React from "react";

// // import { useState } from "react";
// // import { useNavigate } from 'react-router-dom';

// // import ChildService from "../service/ChildService";

// // const ChildRegistration = () => {

// //     const [formdetails, setformdetails] = useState({emergencyContact: "",allergies:"",dateOfBirth:"", emailId: "",medicalInfo:"", name: "",gender:"", password: "" ,parentId:""})
// //     var navigate = useNavigate();

// //     const handlechange = (event) => {
// //         var name = event.target.name;
// //         setformdetails({ ...formdetails, [name]: event.target.value })
// //     }

// //     const addchild = () => {
// //         if(formdetails.emergencyContact==="" ||formdetails.name==="" || formdetails.dateOfBirth==="" || formdetails.phoneNo==="" 
// //             ||formdetails.medicalInfo==="" || formdetails.gender==="" || formdetails.emailId==="" || formdetails.password===""){
// //             alert("Please fill all details")
// //             return;
// //         }

// //         console.log("in addchild");
// //         ChildService.addchild(formdetails)
// //             .then((result) => {
// //                 console.log(result);
// //                 setformdetails({emergencyContact:"",allergies:"",dateOfBirth:"", emailId: "",medicalInfo:"", name: "",gender:"", password: "" ,parentId:""})
// //                 navigate("/login")
// //             })
// //             .catch((error) => {
// //                 console.log("something went wrong" + error.response);
// //             });
// //     }
// //   return (
// //     <div className='container'>
// //         <br /> <br />
// //         <div className='row'>
// //             <div className='col-md-6 offset-md-3'>
// //                 <div className='card'>
// //                     <div className='card-header'>
// //                         <h2 className='text-center'> Child Registration Form </h2>
// //                     </div>
// //                     <div className='card-body'>
// //                         <form>
// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Name </label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='name'
// //                                         className='form-control'
// //                                         placeholder='Enter name'
// //                                         value={formdetails.name}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>

// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Date of birth </label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='date'
// //                                         name='dateOfBirth'
// //                                         className='form-control'
// //                                         placeholder='Enter date of birth'
// //                                         value={formdetails.dateOfBirth}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>
// //                             <div class="input-group">
// //                             <div class="rs-select2 js-select-simple select--no-search">
// //                                 <select name="gender">
// //                                     <option disabled="disabled" selected="selected" placeholder="gender" value={formdetails.gender} onChange={handlechange}>Gender</option>
// //                                     <option value="MALE">MALE </option>
// //                                     <option value="FEMALE">FEMALE</option>
// //                                     <option value="OTHER">OTHER</option>
// //                                 </select>
// //                                 <div class="select-dropdown"></div>
// //                             </div>
// //                         </div>

// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Allergies </label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='allergies'
// //                                         className='form-control'
// //                                         placeholder='Enter allergies'
// //                                         value={formdetails.allergies}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>
// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Medical Information</label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='medicalInfo'
// //                                         className='form-control'
// //                                         placeholder='Enter medicalInfo'
// //                                         value={formdetails.medicalInfo}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>
// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Emergency Contact</label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='emergencyContact'
// //                                         className='form-control'
// //                                         placeholder='Enter emergencyContact'
// //                                         value={formdetails.emergencyContact}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>

// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Email Id</label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='emailId'
// //                                         className='form-control'
// //                                         placeholder='Enter email address'
// //                                         value={formdetails.emailId}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>
// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Password </label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='password'
// //                                         name='password'
// //                                         className='form-control'
// //                                         placeholder='Enter password'
// //                                         value={formdetails.password}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>

// //                             <div className='row mb-3'>
// //                                 <label className='col-md-3 control-label'> Parent Id </label>
// //                                 <div className='col-md-9'>
// //                                     <input
// //                                         type='text'
// //                                         name='parentId'
// //                                         className='form-control'
// //                                         placeholder='Enter parentId'
// //                                         value={formdetails.parentId}
// //                                         onChange={handlechange}
// //                                     >
// //                                     </input>
// //                                 </div>
// //                             </div>
// //                             {/* <div class="input-group">
// //                             <div class="rs-select2 js-select-simple select--no-search">
// //                                 <select name="gender">
// //                                     <option disabled="disabled" selected="selected" placeholder="childRegStatusEnum"  onChange={handleInputChange}>childRegStatusEnum</option>
// //                                     <option>APPROVED </option>
// //                                     <option>REJECTED</option>
// //                                     <option>PENDING</option>
// //                                 </select>
// //                                 <div class="select-dropdown"></div>
// //                             </div>
// //                         </div> */}
// //                             <div className='form-group mb-3'>
// //                                 <button type="button" className='btn btn-primary' onClick={ (e) => addchild(e)}>Submit</button>
// //                             </div>
// //                         </form>

// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default ChildRegistration;



// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import ChildService from "../service/ChildService";

// const ChildRegistration = () => {
//     const [formdetails, setformdetails] = useState({
//         emergencyContact: "",
//         allergies: "",
//         dateOfBirth: "",
//         emailId: "",
//         medicalInfo: "",
//         name: "",
//         gender: "",
//         password: "",
//         parentId: ""
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setformdetails({ ...formdetails, [name]: value });
//     };

//     const validate = () => {
//         const errors = {};
//         if (!formdetails.name) errors.name = "Name is required";
//         if (!formdetails.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
//         if (!formdetails.gender) errors.gender = "Gender is required";
//         if (!formdetails.allergies) errors.allergies = "Allergies are required";
//         if (!formdetails.medicalInfo) errors.medicalInfo = "Medical information is required";
//         // if (!formdetails.emergencyContact) errors.emergencyContact = "Emergency contact is required";
//         if (!formdetails.emailId) errors.emailId = "Email ID is required";
//         if (!formdetails.password) errors.password = "Password is required";
//         if (!formdetails.parentId) errors.parentId = "Parent ID is required";

//         const phonePattern = /^[0-9]{10}$/; 
//         if (!formdetails.emergencyContact) {
//             errors.emergencyContact = "Phone number is required";
//             // valid = false;
//         } else if (!phonePattern.test(formdetails.emergencyContact)) {
//             errors.emergencyContact = "Phone number must be 10 digits";
//             // valid = false;
//         }
//         // Email validation
//         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (formdetails.emailId && !emailPattern.test(formdetails.emailId)) {
//             errors.emailId = "Invalid email format";
//         }

//         // Password validation
//         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (formdetails.password && !passwordPattern.test(formdetails.password)) {
//             errors.password = "Password must be at least 8 characters long and include one uppercase letter, one number, and one special character";
//         }

//         return errors;
//     };

//     const addChild = () => {
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//             return;
//         }

//         console.log("In addChild");
//         const data = { ...formdetails };
//         console.log(data);
//         ChildService.addchild(data)
//             .then((result) => {
//                 console.log(result);
//                 setformdetails({
//                     emergencyContact: "",
//                     allergies: "",
//                     dateOfBirth: "",
//                     emailId: "",
//                     medicalInfo: "",
//                     name: "",
//                     gender: "",
//                     password: "",
//                     parentId: ""
//                 });
//                 navigate("/login");
//             })
//             .catch((error) => {
//                 console.error("Something went wrong", error.response);
//             });
//     };

//     return (
//         <div className='container'>
//             <br /> <br />
//             <div className='row'>
//                 <div className='col-md-6 offset-md-3'>
//                     <div className='card'>
//                         <div className='card-header'>
//                             <h2 className='text-center'>Child Registration Form</h2>
//                         </div>
//                         <div className='card-body'>
//                             <form>
//                                 {Object.keys(errors).length > 0 && (
//                                     <div className='alert alert-danger'>
//                                         {Object.values(errors).map((error, index) => (
//                                             <p key={index}>{error}</p>
//                                         ))}
//                                     </div>
//                                 )}
//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Name</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='name'
//                                             className='form-control'
//                                             placeholder='Enter name'
//                                             value={formdetails.name}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Date of Birth</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='date'
//                                             name='dateOfBirth'
//                                             className='form-control'
//                                             placeholder='Enter date of birth'
//                                             value={formdetails.dateOfBirth}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Gender</label>
//                                     <div className='col-md-9'>
//                                         <select
//                                             name='gender'
//                                             className='form-control'
//                                             value={formdetails.gender}
//                                             onChange={handleChange}
//                                         >
//                                             <option value='' disabled>Select gender</option>
//                                             <option value='MALE'>MALE</option>
//                                             <option value='FEMALE'>FEMALE</option>
//                                             <option value='OTHER'>OTHER</option>
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Allergies</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='allergies'
//                                             className='form-control'
//                                             placeholder='Enter allergies'
//                                             value={formdetails.allergies}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Medical Information</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='medicalInfo'
//                                             className='form-control'
//                                             placeholder='Enter medical information'
//                                             value={formdetails.medicalInfo}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Emergency Contact</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='emergencyContact'
//                                             className='form-control'
//                                             placeholder='Enter emergency contact'
//                                             value={formdetails.emergencyContact}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Email Id</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='emailId'
//                                             className='form-control'
//                                             placeholder='Enter email address'
//                                             value={formdetails.emailId}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Password</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='password'
//                                             name='password'
//                                             className='form-control'
//                                             placeholder='Enter password'
//                                             value={formdetails.password}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className='row mb-3'>
//                                     <label className='col-md-3 control-label'>Parent Id</label>
//                                     <div className='col-md-9'>
//                                         <input
//                                             type='text'
//                                             name='parentId'
//                                             className='form-control'
//                                             placeholder='Enter parent ID'
//                                             value={formdetails.parentId}
//                                             onChange={handleChange}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='form-group mb-3'>
//                                     <button
//                                         type="button"
//                                         className='btn btn-primary'
//                                         onClick={addChild}
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                                 <p>Have an account <a href="/login">Login</a></p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChildRegistration;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ChildService from "../service/ChildService";

const ChildRegistration = () => {
    const [formdetails, setformdetails] = useState({
        emergencyContact: "",
        allergies: "",
        dateOfBirth: "",
        emailId: "",
        medicalInfo: "",
        name: "",
        gender: "",
        password: "",
        parentId: ""
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
        if (!formdetails.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
        if (!formdetails.gender) errors.gender = "Gender is required";
        if (!formdetails.allergies) errors.allergies = "Allergies are required";
        if (!formdetails.medicalInfo) errors.medicalInfo = "Medical information is required";
        if (!formdetails.emailId) errors.emailId = "Email ID is required";
        if (!formdetails.password) errors.password = "Password is required";
        if (!formdetails.parentId) errors.parentId = "Parent ID is required";

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

    const addChild = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("In addChild");
        const data = { ...formdetails };
        console.log(data);
        ChildService.addchild(data)
            .then((result) => {
                console.log(result);
                setformdetails({
                    emergencyContact: "",
                    allergies: "",
                    dateOfBirth: "",
                    emailId: "",
                    medicalInfo: "",
                    name: "",
                    gender: "",
                    password: "",
                    parentId: ""
                });
                navigate("/login");
            })
            .catch((error) => {
                console.error("Something went wrong", error.response);
            });
    };

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'>Child Registration Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => { e.preventDefault(); addChild(); }}>
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
                                            name='parentId'
                                            className='form-control'
                                            placeholder='Enter parent ID'
                                            value={formdetails.parentId}
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

export default ChildRegistration;
