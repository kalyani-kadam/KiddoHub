// import React from 'react'

// const About = () => {
//     return (
//         <>
//             <div className="container">
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

//                 {/* <!-- sidebar CSS--> */}
//                 <link href="Style/sidebar.css" rel="stylesheet" media="all" />
//                 <link href="Style/tables.css" rel="stylesheet" media="all" />
//                 <div>
//                     {/* <body> */}
//                     <div class="sidebar">
//                         <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
//                         <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
//                         <a href="/rules"><i class="fa fa-fw fa-square"></i> Rules </a>
//                         <a href="/aboutus"><i class="fa fa-fw fa-child"></i> About Us </a>
//                         <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
//                     </div>
//                     {/* </body> */}
//                 </div>
//                 <h3 className="py-3">About Us</h3>
//                 <p>
//                     At Kiddohub, we believe in nurturing creativity, curiosity, and learning in every child. Our mission is to provide a safe,
//                     engaging, and fun environment where children can explore their interests, develop new skills, and make lifelong memories</p>

//                 <p className="text-muted">Regards, from creators:
//                     <ul>
//                         <li>Kalyani Kadam</li>
//                         <li>Kshitija Kurhade</li>
//                     </ul>
//                 </p>
//             </div>
//         </>
//     )
// }

// export default About;


import React from 'react';
import '../css/About.css';

const About = () => {
    return (
        <>
            <div className="container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div>
                    <div class="sidebar">
                        <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
                        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="/rules"><i class="fa fa-fw fa-square"></i> Rules </a>
                        <a href="/aboutus"><i class="fa fa-fw fa-child"></i> About Us </a>
                        <a href="/contactus"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                    </div>
                </div>
                <h3 className="py-3">About Us</h3>
                <p>
                    At Kiddohub, we believe in nurturing creativity, curiosity, and learning in every child. Our mission is to provide a safe,
                    engaging, and fun environment where children can explore their interests, develop new skills, and make lifelong memories.
                </p>

                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Kalyani Kadam</li>
                        <li>Kshitija Kurhade</li>
                    </ul>
                </p>
            </div>
        </>
    );
}

export default About;
