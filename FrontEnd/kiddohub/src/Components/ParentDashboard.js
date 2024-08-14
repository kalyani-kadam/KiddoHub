import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/ParentDashboard.css'
import ChildService from '../service/ChildService';

const ParentDashboard = () => {
  const [children, setChildren] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    ChildService.getAllchilds()
      .then((result) => {
        console.log(result.data);
        setChildren(result.data);
        console.log("database data")
        console.log(children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteParent = (childId) => {
    ChildService.deletechild(parseFloat(childId))
      .then((result) => {
        console.log(result)
        navigate("/childdashboard")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="parent-dashboard">
      <h1>Child Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Child ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Allergies</th>
            <th>Medical Info</th>
            <th>Emergency Contact</th>
            <th>Email ID</th>
            <th>Password</th>
            <th>Registration Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {children.map(child => (
            <tr key={child.childId}>
              <td>{child.childId}</td>
              <td>{child.name}</td>
              <td>{child.dateOfBirth}</td>
              <td>{child.gender}</td>
              <td>{child.allergies}</td>
              <td>{child.medicalInfo}</td>
              <td>{child.emergencyContact}</td>
              <td>{child.emailId}</td>
              <td>{child.password}</td>
              <td>{child.childRegStatusEnum}</td>
              
              <td>
                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deleteParent(child.childId) }}>Delete</button>
                {"  "}
                <Link to={`/update/${child.childId}`} state={{ childdata: child }}>
                  <button type="button" name="btn" id="btn" className="btn btn-info">Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentDashboard;
