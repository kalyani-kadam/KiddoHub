import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/ParentDashboard.css'
import ChildService from '../service/ChildService';
import '../Style/sidebar.css';
import '../Style/table.css'

const ChildDashboard = () => {
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

  const deleteChild = (childId) => {
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
      <link href="Style/table.css" rel="stylesheet" media="all"/>
            <Link to="/parentregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Parent</button>
            </Link>
            {"  "}
            <Link to="/childregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Child</button>
            </Link>
            <br></br>
            <link href="css/sidebar.css" rel="stylesheet" media="all" />
            <div>
            <body>
                <div class="sidebar">
                    <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
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
                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deleteChild(child.childId) }}>Delete</button>
                {"  "}
                <br></br>
                <Link to={`/update/${child.childId}`} state={{ childdata: child }}>
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
};

export default ChildDashboard;
