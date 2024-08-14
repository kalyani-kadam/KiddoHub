import React from "react";
import '../Style/sidebar.css';

export default function AdminComponent(){

    const handleAction = ()=>{
        
    }
    return(
        <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="css/sidebar.css" rel="stylesheet" media="all"/>
        <body>
        <div class="sidebar">
            <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
        </div>
        
        <div className="admin-portal">
      <h1>Admin Portal</h1>
      {entities.map((entity) => (
        <div key={entity} className="entity-section">
          <h2>{entity} Management</h2>
          <button onClick={() => handleAction('Add', entity)}>Add {entity}</button>
          <button onClick={() => handleAction('Update', entity)}>Update {entity}</button>
          <button onClick={() => handleAction('Delete', entity)}>Delete {entity}</button>
          <button onClick={() => handleAction('View', entity)}>View {entity}</button>
        </div>
      ))}
    </div>
        </body>

        
        </div>
    )
    
}

