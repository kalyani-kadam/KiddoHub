import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ActivityService from "../service/ActivityService";

const ActivityRegistration = () => {
    const [formdetails, setformdetails] = useState({
        activityId: "",
        staffId: "",
        name: "",
        description: "",
        no_childs: "",
        ageGroup: "",
        schedule: "",
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
        if (!formdetails.ageGroup) errors.ageGroup = "Age Group is required information is required";

        return errors;
    };

    const addActivity = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("In addActivity");
        const data = { ...formdetails };
        // console.log(data);
        ActivityService.addactivity(data)
            .then((result) => {
                console.log(result);
                setformdetails({
                    activityId: "",
                    staffId: "",
                    name: "",
                    description: "",
                    no_childs: "",
                    ageGroup: "",
                    schedule: "",
                });
                alert("Activity Successfully Added!!")
                navigate("/admin")
                // navigate("/login");
            })
            .catch((error) => {
                console.error("Something went wrong", error.response);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setformdetails({
            activityId: "",
            staffId: "",
            name: "",
            description: "",
            no_childs: "",
            ageGroup: "",
            schedule: "",
        });
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
                            <h2 className='text-center'>Activity Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => { e.preventDefault(); addActivity(); }}>
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
                                    <label className='col-md-3 control-label'>Description</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='description'
                                            className='form-control'
                                            placeholder='Enter description'
                                            value={formdetails.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>


                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>No of Childs</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='no_childs'
                                            className='form-control'
                                            placeholder='Enter no_childs'
                                            value={formdetails.no_childs}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Age Group</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='ageGroup'
                                            className='form-control'
                                            placeholder='Enter ageGroup'
                                            value={formdetails.ageGroup}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>schedule</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='date'
                                            name='schedule'
                                            className='form-control'
                                            placeholder='Enter schedule'
                                            value={formdetails.schedule}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Staff Id</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='staffId'
                                            className='form-control'
                                            placeholder='Enter staff ID'
                                            value={formdetails.staffId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='form-group mb-3'>
                                    <button type="submit" className='btn btn-primary' onClick={addActivity}>Submit</button>
                                    {"   "}
                                    <button type="submit" className='btn btn-danger' onClick={reset}>Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityRegistration;