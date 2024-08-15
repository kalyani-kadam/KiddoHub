import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PaymentService from "../service/PaymentService";

const PaymentComponent = () => {
    const [formdetails, setformdetails] = useState({
        tId: "",
        parentId: "",
        amount: "",
        date: "",
        pType: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setformdetails({ ...formdetails, [name]: value });
    };

    // const validate = () => {
    //     const errors = {};
    //     if (!formdetails.name) errors.name = "Name is required";
    //     if (!formdetails.ageGroup) errors.ageGroup = "Age Group is required information is required";

    //     return errors;
    // };

    const addPayment = () => {
  
        console.log("In addPayment");
        const data = { ...formdetails };
        // console.log(data);
        PaymentService.addpayment(data)
            .then((result) => {
                console.log(result);
                setformdetails({
                    tId: "",
                    parentId: "",
                    amount: "",
                    date: "",
                    pType: ""
                });
                alert("Payment Successfully Added!!")
                // navigate("/login");
            })
            .catch((error) => {
                console.error("Something went wrong", error.response);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setformdetails({ tId: "",
            parentId: "",
            amount: "",
            date: "",
            pType: ""});
    }

    return (
        <div className='container'>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
        
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
                            <h2 className='text-center'>Payment Form</h2>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => { e.preventDefault(); addPayment(); }}>
                                {Object.keys(errors).length > 0 && (
                                    <div className='alert alert-danger'>
                                        {Object.values(errors).map((error, index) => (
                                            <p key={index}>{error}</p>
                                        ))}
                                    </div>
                                )}
                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Amount</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='text'
                                            name='amount'
                                            className='form-control'
                                            placeholder='Enter amount'
                                            value={formdetails.amount}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Date</label>
                                    <div className='col-md-9'>
                                        <input
                                            type='date'
                                            name='date'
                                            className='form-control'
                                            placeholder='Enter date'
                                            value={formdetails.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'>Parent ID</label>
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

                                <div className='row mb-3'>
                                    <label className='col-md-3 control-label'> Payment Type </label>
                                    <div className='col-md-9'>
                                        <select 
                                            id="pType" 
                                            name="pType" 
                                            value={formdetails.pType}
                                            onChange={handleChange}>
                                            <option value="" disabled selected>Select PaymentType</option>
                                            <option value={formdetails.post}>ONLINE</option>
                                            <option value={formdetails.post}>CASH</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='form-group mb-3'>
                                    <button type="submit" className='btn btn-primary' onClick={addPayment}>Submit</button>
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

export default PaymentComponent;