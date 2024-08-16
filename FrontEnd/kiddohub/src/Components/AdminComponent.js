// import React from "react";
// // import '../Style/sidebar.css'
// import '../css/AdminHome.css'

// export default function AdminComponent() {

//     return (
//         <div>

//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

//             {/* <!-- sidebar CSS--> */}
//             <link href="Style/sidebar.css" rel="stylesheet" media="all" />
//             <link href="Style/adminhome.css" rel="stylesheet" media="all" />
//             <body>
//                 <div class="sidebar">
//                     <a href="/admin"><i class="fa fa-fw fa-home"></i> Home</a>
//                     <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
//                     <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
//                     <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
//                     <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
//                     <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
//                     <a href="/staffdashboard"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
//                     <a href="/activitydashboard"><i class="fa fa-fw fa-calendar"></i> Activities</a>
//                     <a href="/paymentdashboard"><i class="fa fa-fw fa-credit-card"></i> Payments</a>
//                 </div>
//                 <div class="container">
//                     <main class="main-content">
//                         <header>
//                             <h2>Dashboard</h2>
//                             <div class="user-info">
//                                 <p>Welcome, Admin</p>
//                             </div>
//                         </header>
//                         <section class="overview">
//                             <div class="card">
//                                 <h4>Daily Attendance</h4>
//                                 <p>Number of children attended today: <strong>45</strong></p>
//                             </div>
//                             <div class="card">
//                                 <h4>Upcoming Events</h4>
//                                 <p>Next event: <strong>Field Trip</strong> on <strong>August 20, 2024</strong></p>
//                             </div>
//                             <div class="card">
//                                 <h4>Recent Activities</h4>
//                                 <p>Latest activity: <strong>Arts & Crafts</strong></p>
//                             </div>
//                         </section>
//                         <section class="recent-activities">
//                             <h2>Recent Activities</h2>
//                             <ul>
//                                 <li><i class="fa fa-circle"></i> <strong>August 15, 2024:</strong> Science Experiment with children.</li>
//                                 <li><i class="fa fa-circle"></i> <strong>August 14, 2024:</strong> New educational toys received.</li>
//                             </ul>
//                         </section>
//                         <section class="staff-management">
//                             <h2>Staff Management</h2>
//                             <p><a href="#">View All Staff</a> | <a href="#">Add New Staff</a></p>
//                         </section>
//                         <section class="notifications">
//                             <h2>Notifications</h2>
//                             <ul>
//                                 <li><i class="fa fa-info-circle"></i> Reminder: Staff meeting at 3 PM.</li>
//                                 <li><i class="fa fa-exclamation-triangle"></i> Alert: Compliance report due next week.</li>
//                             </ul>
//                         </section>
//                     </main>
//                 </div>
//             </body>
//         </div>
//     )

// }


import React from "react";
// import '../Style/sidebar.css'
import '../css/AdminHome.css'

export default function AdminComponent() {

    return (
        <div>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/adminhome.css" rel="stylesheet" media="all" />
            
            <div className="container">
                <div className="sidebar">
                    <a href="/admin"><i className="fa fa-fw fa-home"></i> Home</a>
                    <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
                    <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                    <a href="/parenttable"><i className="fa fa-fw fa-user"></i> Parents </a>
                    <a href="/childdashboard"><i className="fa fa-fw fa-child"></i> Children </a>
                    <a href="/doctordashboard"><i className="fa fa-fw fa-user-md"></i> Doctors</a>
                    <a href="/staffdashboard"><i className="fa fa-fw fa-id-badge"></i> Staffs </a>
                    <a href="/activitydashboard"><i className="fa fa-fw fa-calendar"></i> Activities</a>
                    <a href="/paymentdashboard"><i className="fa fa-fw fa-credit-card"></i> Payments</a>
                </div>

                <main className="main-content">
                    <header>
                        <h2>Dashboard</h2>
                        <div className="user-info">
                            <p>Welcome, Admin</p>
                        </div>
                    </header>
                    <div className="overview">
                    {/* <section className="overview"> */}
                        <div className="card">
                            <h4>Daily Attendance</h4>
                            <p>Number of children attended today: <strong>45</strong></p>
                        </div><br/>
                        <div className="card">
                            <h4>Upcoming Events</h4>
                            <p>Next event: <strong>Field Trip</strong> on <strong>August 20, 2024</strong></p>
                        </div><br/>
                        <div className="card">
                            <h4>Recent Activities</h4>
                            <p>Latest activity: <strong>Arts & Crafts</strong></p>
                        </div>
                        </div>
                    {/* </section> */}
                    <section className="recent-activities">
                        <h2>Recent Activities</h2>
                        <ul>
                            <li><i className="fa fa-circle"></i> <strong>August 15, 2024:</strong> Science Experiment with children.</li>
                            <li><i className="fa fa-circle"></i> <strong>August 14, 2024:</strong> New educational toys received.</li>
                        </ul>
                    </section>
                    <section className="staff-management">
                        <h2>Staff Management</h2>
                        <p><a href="/staffdashboard">View All Staff</a> | <a href="/staffregister">Add New Staff</a></p>
                    </section>
                    <section className="notifications">
                        <h2>Notifications</h2>
                        <ul>
                            <li><i className="fa fa-info-circle"></i> Reminder: Staff meeting at 3 PM.</li>
                            <li><i className="fa fa-exclamation-triangle"></i> Alert: Compliance report due next week.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
}
