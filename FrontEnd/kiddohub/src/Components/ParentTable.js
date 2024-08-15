import React, { useEffect, useState } from "react";
import ParentService from "../service/ParentService";
import { Link, useNavigate } from "react-router-dom";
import '../Style/sidebar.css'
import '../Style/table.css'

export default function ParentTable() {
    const [arr, setarr] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);

    const navigate = useNavigate();

    const fetchdata = () => {
        ParentService.getAllParents()
            .then((result) => {
                console.log(result.data);
                setarr(result.data);
                //setarr([...arr,result.data])
                console.log("database data")
                console.log(arr);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const deleteParent = (parentId) => {
        ParentService.deleteparent(parseFloat(parentId))
            .then((result) => {
                console.log("parent delete succcessful")
                console.log(result)
                navigate("/parenttable")
            })
            .catch((err) => {
                console.log("parent delete unsucccessful")
                console.log(err);
                navigate("/home")
            })
    }
    return (
        <div>
<<<<<<< HEAD
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

=======
            <h1>Parent Dashboard</h1>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
>>>>>>> fb8c02ee5743e688ad28d54015d90afb17034d8d
            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all" />
            <link href="Style/tables.css" rel="stylesheet" media="all" />

            <Link to="/parentregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Parent</button>
            </Link>&nbsp;&nbsp;
            <Link to="/login">
                <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
            </Link>
            <br></br><br></br>
            <div>
<<<<<<< HEAD
                <body>
                    <div class="sidebar">
                        <a href="/home"><i class="fa fa-fw fa-home"></i> Home</a>
                        <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
                        <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
                        <a href="/parenttable"><i class="fa fa-fw fa-user"></i> Parents </a>
                        <a href="/childdashboard"><i class="fa fa-fw fa-child"></i> Children </a>
                        <a href="/doctordashboard"><i class="fa fa-fw fa-user-md"></i> Doctors</a>
                        <a href="/staffregister"><i class="fa fa-fw fa-id-badge"></i> Staffs </a>
                        <a href="/activityregister"><i class="fa fa-fw fa-calendar"></i> Activities</a>

                    </div>
                </body>
=======
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
>>>>>>> fb8c02ee5743e688ad28d54015d90afb17034d8d
            </div>
            <div class="container">
                <table border='2'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            {/* <th>C date</th>
                        <th>U date</th> */}
                            <th>Address</th>
                            <th>EmailId</th>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map(parent => <tr key={parent.parentId}>
                            <td>{parent.parentId}</td>
                            {/* <td>{d.creation_date}</td>
                        <td>{d.updated_on}</td> */}

                            <td>{parent.address}</td>
                            <td>{parent.emailId}</td>
                            <td>{parent.name}</td>
                            <td>{parent.phoneNo}</td>

                            <td>
                                <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={() => { deleteParent(parent.parentId) }}>Delete</button>
                                &nbsp;&nbsp;
                                <Link to={`/update/${parent.parentId}`} state={{ parentdata: parent }}>
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