import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from 'react-router-dom';
import ChildService from "../service/ChildService";

const ChildRegStatusUpdate = () => {
    const { childId } = useParams(); // Get childId from URL
    console.log("Retrieved childId:", childId);
    const [formdetails, setFormdetails] = useState({
        childId: "",
        childRegStatusEnum: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormdetails({ ...formdetails, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formdetails.childId) errors.childId = "Child ID is required";
        if (!formdetails.childRegStatusEnum) errors.childRegStatusEnum = "Registration Status is required";
        return errors;
    };

    // Fetch child data when component mounts
    useEffect(() => {
        if (formdetails.childId) {
            ChildService.getChildById(formdetails.childId) // Implement this method in your service
                .then(response => {
                    console.log(response.data);
                    setFormdetails(response.data);
                })
                .catch(error => {
                    console.error("Error fetching child data", error);
                });
        }
    }, [formdetails.childId]);

    const updateChild = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("In update Child");
        const data = { ...formdetails };

        ChildService.updateregchild(data)
            .then((result) => {
                console.log(result);
                setFormdetails({
                    childId: "",
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
                            <h2 className='text-center'>Child Update Form</h2>
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
                                    <label className='col-md-3 control-label'>Child ID</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='childId'
                                            className='form-control'
                                            placeholder='Enter Child ID'
                                            value={formdetails.childId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Registration Status</label>
                                    <div className='col-md-9'>
                                        <select
                                            name='childRegStatusEnum'
                                            className='form-control'
                                            value={formdetails.childRegStatusEnum}
                                            onChange={handleChange}
                                        >
                                            <option value='' disabled>Select Status</option>
                                            <option value='APPROVED'>APPROVED</option>
                                            <option value='PENDING'>PENDING</option>
                                        </select>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildRegStatusUpdate;
