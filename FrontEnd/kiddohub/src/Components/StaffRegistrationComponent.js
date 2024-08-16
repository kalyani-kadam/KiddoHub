import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import StaffService from "../service/StaffService";

const StaffRegisteration = () => {
    const [formdetails, setformdetails] = useState({ name: "", post: "", joiningDate: "", mobNo: "", email: "", address: "" })
    var navigate = useNavigate();

    const handlechange = (event) => {
        var name = event.target.name;
        setformdetails({ ...formdetails, [name]: event.target.value })
    }

    const addStaff = () => {
        if (formdetails.name === "" || formdetails.post === "" || formdetails.joiningDate === "" ||
            formdetails.mobNo === "" || formdetails.email === "" || formdetails.address === "") {
            alert("Please fill all details")
            return;
        }

        console.log("in addStaff");

        StaffService.addstaff(formdetails).then((result) => {
            console.log(result);
            setformdetails({ staffId: "", name: "", post: "", joiningDate: "", mobNo: "", email: "", address: "" })
            alert("Successfully Register!!")
            navigate("/admin")
        })
            .catch((error) => {
                console.log("something went wrong" + error.response);
            });
    }

    const reset = (e) => {
        e.preventDefault();
        setformdetails({ name: "", post: "", joiningDate: "", mobNo: "", email: "", address: "" });
    }

    return (
        <div className='container'>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />

            <br /> <br />
            <div>
                <body>
                    <div class="sidebar">
                        <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
                        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                        <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
                        <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
                        <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
                        <a href="/staffdashboard"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
                        <a href="/activitydashboard"><i class="fa fa-fw fa-calendar"></i> Activities</a>
                        <a href="/paymentdashboard"><i class="fa fa-fw fa-credit-card"></i> Payments</a>
                    </div>

                </body>
            </div>

            <div className='row'>
                <div className='col-md-9 offset-md-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2 className='text-center'> Staff Registration Form </h2>
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

                                {/* <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Post </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='post'
                                            className='form-control'
                                            placeholder='Enter post'
                                            value={formdetails.post}
                                            onChange={handlechange}
                                        >
                                        </input>
                                    </div>
                                </div> */}

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Post </label>
                                    <div className='col-md-9'>
                                        <select
                                            id="post"
                                            name="post"
                                            value={formdetails.post}
                                            onChange={handlechange}>
                                            <option value="" disabled >Select Post</option>
                                            <option value='DIRECTOR'>DIRECTOR</option>
                                            <option value='SUPERVISOR'>SUPERVISOR</option>
                                            <option value='EDUCATOR'>EDUCATOR</option>
                                            <option value='ASSISTANT'>ASSISTANT</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Joining Date </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='date'
                                            name='joiningDate'
                                            className='form-control'
                                            placeholder='Enter joiningDate'
                                            value={formdetails.joiningDate}
                                            onChange={handlechange}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Mobile No. </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='mobNo'
                                            className='form-control'
                                            placeholder='Enter mobNo'
                                            value={formdetails.mobNo}
                                            onChange={handlechange}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Email </label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='email'
                                            className='form-control'
                                            placeholder='Enter email'
                                            value={formdetails.email}
                                            onChange={handlechange}
                                        >
                                        </input>
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
                                            onChange={handlechange}
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className='form-group mb-3'>
                                    <button type="submit" className='btn btn-primary' onClick={addStaff}>Submit</button>
                                    {"   "}
                                    <button type="submit" className='btn btn-danger' onClick={reset}>Reset</button>
                                </div>
                                <p>Have an account <a href="/login">Login</a></p>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default StaffRegisteration;