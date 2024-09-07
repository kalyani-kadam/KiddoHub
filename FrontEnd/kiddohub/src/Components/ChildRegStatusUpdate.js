import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import ChildService from "../service/ChildService";

const ChildRegStatusUpdate = () => {
    const { childId } = useParams(); // Get childId from URL
    const [formdetails, setFormdetails] = useState({
        childId: "",
        childRegStatusEnum: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (childId) {
            ChildService.getChildById(childId)
                .then(response => {
                    console.log("Fetched child data:", response.data);
                    setFormdetails({
                        ...response.data,
                        childId: childId // Ensure childId is included in formdetails
                    });
                })
                .catch(error => {
                    console.error("Error fetching child data", error);
                });
        }
    }, [childId]);

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
                navigate("/childdashboard");
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
                            <h2 className='text-center'>Child Status Update Form</h2>
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
                                            value={formdetails.childId || ''}
                                            onChange={handleChange}
                                            disabled // Prevent manual editing of childId
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Registration Status</label>
                                    <div className='col-md-9'>
                                        <select
                                            name='childRegStatusEnum'
                                            className='form-control'
                                            value={formdetails.childRegStatusEnum || ''}
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

