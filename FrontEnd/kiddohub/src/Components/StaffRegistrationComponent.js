import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import StaffService from "../service/StaffService";

const StaffRegisteration = () =>{
    const [formdetails, setformdetails] = useState({name: "", post: "", joiningDate: "", mobNo: "", email: "", address:"" })
    var navigate = useNavigate();

    const handlechange = (event) => {
        var name = event.target.name;
        setformdetails({ ...formdetails, [name]: event.target.value })
    }

    const addStaff = () => {
        if(formdetails.name==="" || formdetails.post==="" || formdetails.joiningDate==="" || 
                        formdetails.mobNo==="" || formdetails.email==="" || formdetails.address==="" ){
            alert("Please fill all details")
            return;
        }

        console.log("in addStaff");

        StaffService.addStaff(formdetails).then((result) => {
            console.log(result);
            setformdetails({staffId:"",name:"", post:"", joiningDate:"", mobNo:"",email:"",address:""})
            alert("Successfully Register!!")
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
                                            <option value="" disabled selected>Select Post</option>
                                            <option value="DIRECTOR">DIRECTOR</option>
                                            <option value={formdetails.post}>SUPERVISOR</option>
                                            <option value="EDUCATOR">EDUCATOR</option>
                                            <option value="ASSISTANT">ASSISTANT</option>
                                            
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
                                    <button type="button" className='btn btn-primary' onClick={ (e) => addStaff(e)}>Register</button>
                                </div>
                            </form>
    
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
      )

}

export default StaffRegisteration;