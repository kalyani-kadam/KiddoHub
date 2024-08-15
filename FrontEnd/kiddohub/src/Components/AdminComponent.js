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
                            <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                            <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                            <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
                            <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
                            <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
                            <a href="/staffdashboard"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
                            <a href="/activitydashboard"><i class="fa fa-fw fa-calendar"></i> Activities</a>
                            <a href="/paymentdashboard"><i class="fa fa-fw fa-credit-card"></i> Payments</a>         
                </div>
            
        </body>
        </div>
    )
    
}