import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import StaffService from "../service/StaffService";

import '../Style/sidebar.css'
import '../Style/table.css'

const StaffDashboard = () => {
    const [arr, setarr] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();

    const fetchdata = () => {
        StaffService.getallstaffs()
            .then((result) => {
                console.log(result.data);
                setarr(result.data);
                console.log("database data")
                console.log(arr);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    const deleteStaff = (staffId) => {
        StaffService.deletestaff(parseFloat(staffId))
            .then((result) => {
                console.log("staff delete succcessful")
                console.log(result)
                navigate("/staffdashboard")
            })
            .catch((err) => {
                console.log("staff delete unsucccessful")
                console.log(err);
                // navigate("/home")
            })
    }

    return (
        <div>
            <br />
            <h2>Staff Dashboard</h2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/tables.css" rel="stylesheet" media="all" />

            <br />
            <Link to="/staffregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Staff</button>
            </Link>&nbsp;&nbsp;
            <Link to="/login">
                <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
            </Link>
            <br></br><br></br>
            <div>
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
            <div class="container">
                <table border='2'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            {/* <th>C date</th>
                        <th>U date</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>Joining Date</th>
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {arr.map(parent => <tr key={parent.parentId}>
                        <td>{parent.parentId}</td>
                        {/* <td>{d.creation_date}</td>
                        <td>{d.updated_on}</td> */}

                        {/* <td>{parent.address}</td>
                        <td>{parent.emailId}</td>
                        <td>{parent.name}</td>
                        <td>{parent.phoneNo}</td> } */}

                        {arr.map(staff => <tr key={staff.staffId}>
                            <td>{staff.staffId}</td>
                            <td>{staff.name}</td>
                            <td>{staff.email}</td>
                            <td>{staff.mobNo}</td>
                            <td>{staff.address}</td>
                            <td>{staff.joiningDate}</td>
                            <td>{staff.post}</td>

                            <td>
                                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deleteStaff(staff.staffId) }}>Delete</button>
                                &nbsp;&nbsp;
                                <Link to={`/update/${staff.staffId}`} state={{ staffdata: staff }}>
                                    <button type="button" name="btn" id="btn" className="btn btn-info">Edit</button>
                                </Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StaffDashboard;