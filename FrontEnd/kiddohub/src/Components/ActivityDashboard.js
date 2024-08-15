import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ActivityService from "../service/ActivityService";

import '../Style/sidebar.css'
import '../Style/table.css'

const ActivityDashboard = () =>{
    const[arr,setarr] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[]);

    const navigate = useNavigate();

    const fetchdata=()=>{ 
        ActivityService.getallactivities()
        .then((result)=>{
            console.log(result.data);
            setarr(result.data);
            console.log("database data")
            console.log(arr);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    const deleteActivity=(activityId)=>{
        ActivityService.deleteactivity(parseFloat(activityId))
        .then((result)=>{
            alert("Activity delete succcessful")
            console.log(result)
            navigate("/activitydashboard")
        })
        .catch((err)=>{
            alert("Activity delete unsucccessful")
            console.log(err);
            // navigate("/home")
        })
    }
    return(
        <div>
            <br/>
            <h2>Activity Dashboard</h2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
            {/* <!-- sidebar CSS--> */}
            <link href="Style/sidebar.css" rel="stylesheet" media="all"/>
            <link href="Style/tables.css" rel="stylesheet" media="all"/>

            <br/>
            <Link to="/activityregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Activity</button>
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
                        <th>ActivityId</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>noChilds</th>
                        <th>ageGroup</th>
                        <th>schedule</th>
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

                    {arr.map(activity => <tr key={activity.activityId}>
                        <td>{activity.activityId}</td>
                        <td>{activity.description}</td>
                        <td>{activity.name}</td>
                        <td>{activity.noChilds}</td>
                        <td>{activity.ageGroup}</td>
                        <td>{activity.schedule}</td>
                       
                        <td>
                            <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={()=>{deleteActivity(activity.activityId)}}>Delete</button>
                            &nbsp;&nbsp;
                            <Link to={`/update/${activity.activityId}`} state={{activitydata:activity}}>
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

export default ActivityDashboard;