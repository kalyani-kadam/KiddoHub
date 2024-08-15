import React from "react";
import '../css/ChildRules.css'; // Custom CSS file for additional styles
import "bootstrap/dist/css/bootstrap.min.css";

const ChildRules = () => {
    const rules = [
        "Children must respect their elders and teachers.",
        "Proper hygiene and cleanliness should be maintained.",
        "Students should wear the prescribed uniform.",
        "Regular attendance is mandatory.",
        "Homework and assignments must be completed on time.",
        "Respect towards peers and no bullying is allowed.",
        "Punctuality is essential.",
        "Participation in extracurricular activities is encouraged.",
        "Honesty in all aspects of life is expected.",
        "No mobile phones are allowed in school.",
        "Students must speak politely to everyone.",
        "Littering is strictly prohibited; students must use dustbins.",
        "Students must not deface school property.",
        "Following instructions from school authorities is necessary.",
        "Participation in national and cultural celebrations is encouraged.",
        "Students must maintain discipline during assemblies.",
        "Bringing expensive items to school is not allowed.",
        "Students should help keep the school premises clean.",
        "Healthy eating habits should be followed.",
        "Respect for the national symbols is a must."
    ];

    return (
        <div className="container mt-5">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/tables.css" rel="stylesheet" media="all" />
            <div>
                {/* <body> */}
                <div class="sidebar">
                    <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
                    <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                    <a href="/rules"><i class="fa fa-fw fa-square"></i> Rules </a>
                    <a href="/aboutus"><i class="fa fa-fw fa-child"></i> About Us </a>
                    <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                </div>
                {/* </body> */}
            </div>
            <div className="card shadow-lg p-4">
                <div className="card-body">
                    <h2 className="text-center mb-4">Child Rules</h2>
                    <ul className="list-group list-group-flush">
                        {rules.map((rule, index) => (
                            <li key={index} className="list-group-item">
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChildRules;
