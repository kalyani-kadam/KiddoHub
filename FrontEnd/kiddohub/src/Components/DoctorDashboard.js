import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DoctorService from '../service/DoctorService';

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate=useNavigate();

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
            <br></br>
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
