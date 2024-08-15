import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorService from '../service/DoctorService';

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
      <Link to="/doctorregister">
        <button type="button" name="btn" id="btn" className="btn btn-primary">Add Doctor</button>
      </Link>
      <Link to="/childdashboard">
        <button type="button" name="btn" id="btn" className="btn btn-warning">Update child</button>
      </Link>
      <br></br>

      <div>
        <body>
          <div class="sidebar">
            <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="/clients"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
            <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
            <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
            <a href="/staffdashboard"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
            <a href="/activitydashboard"><i class="fa fa-fw fa-calendar"></i> Activities</a>
            <a href="/paymentdashboard"><i class="fa fa-fw fa-credit-card"></i> Payments</a>
          </div>
        </body>
      </div>
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
  );
}

export default DoctorDashboard;
