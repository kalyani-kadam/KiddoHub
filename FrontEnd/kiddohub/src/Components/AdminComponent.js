import React, { useState } from "react";
import '../Style/sidebar.css';

export default function AdminComponent(){  
    return(
        <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="css/sidebar.css" rel="stylesheet" media="all"/>
        <body>
        <div class="sidebar">
            <a href="/"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="/childdashboard"><i class="fa fa-fw fa-wrench"></i> Child</a>
            <a href="/doctordashboard"><i class="fa fa-fw fa-wrench"></i> Doctor</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parent</a>
            <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
        </div>
        
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
        </body>

        
        </div>
    )
    
}

