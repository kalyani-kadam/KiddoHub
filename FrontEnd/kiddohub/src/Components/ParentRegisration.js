import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import ParentService from "../service/ParentService";

const ParentRegistration = () => {

    const [formdetails, setformdetails] = useState({address: "", emailId: "", name: "", phoneNo: "", password: "" })
    var navigate = useNavigate();

    const handlechange = (event) => {
        var name = event.target.name;
        setformdetails({ ...formdetails, [name]: event.target.value })
    }

    const addparent = () => {
        if(formdetails.name==="" || formdetails.address==="" || formdetails.phoneNo==="" || formdetails.emailId==="" || formdetails.password===""){
            alert("Please fill all details")
            return;
        }
        console.log("in addparent");
        ParentService.addparent(formdetails)
            .then((result) => {
                console.log(result);
                setformdetails({parentId:"", address: "", emailId: "", name: "", phoneNo: "", password: "" })
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
                        <h2 className='text-center'> Parent Registration Form </h2>
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
                                <label className='col-md-3 control-label'> PhoneNo </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='phoneNo'
                                        className='form-control'
                                        placeholder='Enter phoneNo'
                                        value={formdetails.phoneNo}
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
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'> Email Id</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='emailId'
                                        className='form-control'
                                        placeholder='Enter email Id'
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

                            <div className='form-group mb-3'>
                                <button type="button" className='btn btn-primary' onClick={ (e) => addparent(e)}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ParentRegistration;

