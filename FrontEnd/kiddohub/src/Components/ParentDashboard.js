import { useNavigate } from 'react-router-dom';
import ParentService from "../service/ParentService";

import React, { useState, useEffect } from 'react';
import '../css/ParentDashboard.css'
import ChildService from '../service/ChildService';

const ParentDashboard = () => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    ChildService.getAllchilds()
    .then((result)=>{
      console.log(result.data);
      setChildren(result.data);
     //setarr([...arr,result.data])
      console.log("database data")
      console.log(children);
  })
  .catch((err)=>{
      console.log(err);
  });
      // .then(response => response.json())
      // .then(data => setChildren(data))
      // .catch(error => console.error('Error fetching children data:', error));
  }, []);

  return (
    <div className="parent-dashboard">
      <h1>Parent Dashboard</h1>
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
            <th>Child Registration Status</th>
            <th>Parent</th>
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
              <td>{child.parent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentDashboard;
