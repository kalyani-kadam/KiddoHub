// import React, { useEffect,useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import ParentService from '../service/ParentService'

// const Login = () => {

//     const [formdata,setformdata] = useState({emailId:"",password:""});
//     const [passType, setPassType] = useState("text");
//     const [isChecked, setIsChecked] = useState(false);
//     const [errors, setErrors] = useState({});

//     var navigate = useNavigate();

//     const handlechange = (event) => {
//         var name = event.target.name;
//         setformdata({ ...formdata, [name]: event.target.value })
//     }

//     // const admin = () => {
//     //     if(formdata.emailId==="kk@gmail.com" && formdata.password==="Kk@32024")
//     //          navigate("/admin")
//     //     else
//     //         navigate("/login");
//     // }
//     const validate = () => {
//         let formErrors = {};
//         let valid = true;

//         // Email validation
//         if (!formdata.emailId) {
//             formErrors.emailId = "Email is required";
//             valid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formdata.emailId)) {
//             formErrors.emailId = "Email Id is invalid";
//             valid = false;
//         }

//         // Password validation
//         // Password validation
//         const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//         if (!formdata.password) {
//             formErrors.password = "Password is required";
//             valid = false;
//         } else if (!passwordPattern.test(formdata.password)) {
//             formErrors.password = "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character";
//             valid = false;
//         }
//         setErrors(formErrors);
//         return valid;
//     };
   
//     useEffect(()=>{
//         if(isChecked==true){
//             setPassType("text");
//             return;
//         }
//         setPassType("password");
//     },[isChecked])

//     const login = async() => {
        
//         console.log("in login");

//         if(formdata.emailId==="kk@gmail.com" && formdata.password==="Kk@32024")
//             navigate("/admin")
//        else
//            navigate("/login");

//         if (validate()) {
//             const response = await ParentService.loginAPICall(formdata.emailId,formdata.password)

//             .then(response => {
//                 if (response.status === 200) {
//                     navigate("/parenttable"); // or wherever you want to navigate after successful login
//                 } else {
//                     setErrors("Invalid email or password");
//                 }
//             })
//             .catch(error => {
//                 // You can handle different error scenarios here
//                 if (error.response && error.response.status === 401) {
//                     setErrors("Invalid email or password");
//                 } else {
//                     setErrors("An error occurred while trying to login.");
//                 }
//                 console.error("Login error:", error);
//             });
//         }
//         // }
//     }

//   return (
//     <div className='container'>
//         <br /> <br />
//         <div className='row'>
//             <div className='col-md-6 offset-md-3'>
//                 <div className='card'>
//                     <div className='card-header'>
//                         <h2 className='text-center'> Login Form </h2>
//                     </div>

//                     <div className='card-body'>
//                         <form>

//                         <div className='row mb-3'>
//                                 <label className='col-md-3 control-label'> Email Id</label>
//                                 <div className='col-md-9'>
//                                     <input
//                                         type='text'
//                                         name='emailId'
//                                         className='form-control'
//                                         placeholder='Enter email Id'
//                                         value={formdata.emailId}
//                                         onChange={handlechange}
//                                     >
//                                     </input>
//                                     {errors.emailId && <small className="text-danger">{errors.emailId}</small>}
//                                 </div>
//                             </div>

//                             <div className='row mb-3'>
//                                 <label className='col-md-3 control-label'> Password </label>
//                                 <div className='col-md-9'>
//                                     <input
//                                         type='password'
//                                         name='password'
//                                         className='form-control'
//                                         placeholder='Enter password'
//                                         value={formdata.password}
//                                         onChange={handlechange}
//                                     >
//                                     </input>
//                                     {errors.password && <small className="text-danger">{errors.password}</small>}
//                                     {/* <span><input type="checkbox" checked={isChecked} onChange={handleShowPassword} style={{'marginLeft':'150px'}} id="show"></input>&emsp;</span><label htmlFor="show">Show Password</label> */}
//                                 </div>
//                             </div>

//                             <div className='form-group mb-3'>
//                                 <button type="button" className='btn btn-primary' onClick={ (e) => login(e)}>Submit</button>
//                             </div>
//                             <p>Don't have an account <a href="/signup">Signup</a></p>
//                         </form>

//                     </div>

//                 </div>
//             </div>
//         </div>


//     </div>
//   )
// }

// export default Login


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/children/login", { emailId, password })
//       .then(response => {
//         const child = response.data;
//         localStorage.setItem("child", JSON.stringify(child));
//         navigate("/profile");
//       })
//       .catch(() => {
//         setError("Invalid email or password");
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <div className="mb-3">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChildLogin = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/children/login', {
                emailId,
                password
            });
            console.log(response)
            // // const { id, name } = response.data;

            // // Store the childId in localStorage or state management
            // localStorage.setItem('childId', response.childId);
            // localStorage.setItem('childName', response.name);

            // // Navigate to profile page
            // navigate('/profile');
            const { childId, name,emailId,emergencyContact,medicalInfo,gender,allergies,childRegStatusEnum,password,address} = response.data;

            if (childId && name) {
                // Store the childId and name in localStorage
                localStorage.setItem('childId', childId);
                localStorage.setItem('childName', name);
                localStorage.setItem('emailId',emailId);
                localStorage.setItem('emergencyContact',emergencyContact);
                localStorage.setItem('medicalInfo',medicalInfo);
                localStorage.setItem("gender",gender);
                localStorage.setItem("allergies",allergies)
                localStorage.setItem("childRegStatusEnum",childRegStatusEnum)
                localStorage.setItem("password",password)
                // localStorage.setItem("address",address)
                // Navigate to profile page
                navigate('/profile');
            } else {
                // Handle cases where the response does not contain childId or name
                setError('Failed to log in. Please try again.');
            }
        } catch (err) {
            setError('Invalid email or password');
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h2>Child Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email ID</label>
                    <input
                        type="email"
                        className="form-control"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
};

export default ChildLogin;
