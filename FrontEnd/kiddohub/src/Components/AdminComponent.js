import React from "react";
import '../Style/sidebar.css'

export default function AdminComponent(){

    return(
        <div>

<<<<<<< HEAD
      {/* <!-- sidebar CSS--> */}
      <link href="css/sidebar.css" rel="stylesheet" media="all" />
      <div>
        <body>
          <div class="sidebar">
            <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
            <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
            <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
            <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
            <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activities</a>
          </div>
        </body>
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
      {/* </body> */}


    </div>
  )

}

=======
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
        <body>
            <div class="sidebar">
                        <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
                        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                        <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
                        <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
                        <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
                        <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
                        <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activities</a>
                        <a href="/payment"><i class="fa fa-fw fa-credit-card"></i> Payments</a>         
            </div>
            
        </body>
        </div>
    )
    
}
>>>>>>> fb8c02ee5743e688ad28d54015d90afb17034d8d
