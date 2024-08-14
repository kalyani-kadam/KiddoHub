<<<<<<< HEAD
import React from "react";
import '../Style/sidebar.css'

export default function AdminComponent(){

=======
import React, { useState } from "react";
import '../Style/sidebar.css';

export default function AdminComponent(){
    const[entities,setentities] = useState([]);
    const handleAction = ()=>{

    }
>>>>>>> 041f5dc599e6d3242f40ddcfa9817b202681d74c
    return(
        <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
        <body>
        <div class="sidebar">
            <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
<<<<<<< HEAD
            <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
=======
            <a href="/parentdashboard"><i class="fa fa-fw fa-wrench"></i> Parent</a>
            <a href="/doctor"><i class="fa fa-fw fa-wrench"></i> Add Doctor</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Clients</a>
>>>>>>> 041f5dc599e6d3242f40ddcfa9817b202681d74c
            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parentregister"><i class="fa fa-fw fa-user"></i> Parent Registeration</a>
            <a href="/childregister"><i class="fa fa-fw fa-child"></i> Child Registeration</a>
            <a href="/doctorregister"><i class="fa fa-fw fa-user-md"></i> Doctor Registeration</a>
            <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staff Registeration</a>
            <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activity Schedule</a>
            
        </div>
        
<<<<<<< HEAD
        
=======
        {/* <div className="admin-portal">
      <h1>Admin Portal</h1>
      {entities.map((parent) => (
        <div key={parent} className="entity-section">
          <h2>{parent} Management</h2>
          <button onClick={() => handleAction('Add', parent)}>Add {parent}</button>
          <button onClick={() => handleAction('Update', parent)}>Update {parent}</button>
          <button onClick={() => handleAction('Delete', parent)}>Delete {parent}</button>
          <button onClick={() => handleAction('View', parent)}>View {parent}</button>
        </div>
      ))}
    </div> */}
>>>>>>> 041f5dc599e6d3242f40ddcfa9817b202681d74c
        </body>
        </div>
    )
    
}