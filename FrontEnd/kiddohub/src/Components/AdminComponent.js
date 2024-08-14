import React from "react";
import '../Style/sidebar.css'

export default function AdminComponent(){

    return(
        <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        {/* <!-- sidebar CSS--> */}
        <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
        <body>
        <div class="sidebar">
            <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
            <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
            <a href="/parentregister"><i class="fa fa-fw fa-user"></i> Parent Registeration</a>
            <a href="/childregister"><i class="fa fa-fw fa-child"></i> Child Registeration</a>
            <a href="/doctorregister"><i class="fa fa-fw fa-user-md"></i> Doctor Registeration</a>
            <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staff Registeration</a>
            <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activity Schedule</a>
            
        </div>
        
        
        </body>
        </div>
    )
    
}