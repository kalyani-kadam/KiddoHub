import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorService from '../service/DoctorService';
import '../Style/table.css'
import '../Style/sidebar.css'

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    DoctorService.getAlldoctors()
      .then((result) => {
        console.log(result.data);
        setDoctors(result.data);
        console.log("database data")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteDoctor = (doctorId) => {
    DoctorService.deleteparent(parseFloat(doctorId))
      .then((result) => {
        console.log(result)
        navigate("/doctordashboard")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (

    <div className="doctor-dashboard">
      <h2>Doctor Dashboard</h2>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="Style/sidebar.css" rel="stylesheet" media="all" />
      <link href="Style/table.css" rel="stylesheet" media="all" />
      <Link to="/doctorregister">
        <button type="button" name="btn" id="btn" className="btn btn-primary">Add Doctor</button>
      </Link>
      <Link to="/updatestatus/:id">
        <button type="button" name="btn" id="btn" className="btn btn-primary"> Update Child</button>
      </Link>
      <br></br><br></br>
      
      <br></br>
      <div>
        <body>
          <div class="sidebar">
            <a href="/"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
            <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
            <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
            <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
            <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activities</a>
          </div>
        </body>
      </div>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Phone No</th>
              <th>Email ID</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => (
              <tr key={doctor.doctorId}>
                <td>{doctor.doctorId}</td>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.phoneNo}</td>
                <td>{doctor.emailId}</td>
                <td>{doctor.password}</td>
                <td>
                  <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deleteDoctor(doctor.doctorId) }}>Delete</button>
                  {"  "}
                  <Link to={`/update/${doctor.doctorId}`} state={{ doctordata: doctor }}>
                    <button type="button" name="btn" id="btn" className="btn btn-info">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorDashboard;
