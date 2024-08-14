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
                // navigate("/login");
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
                                    <button type="button" className='btn btn-primary' onClick={ (e) => addActivity(e)}>AddActivity</button>
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