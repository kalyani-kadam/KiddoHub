import React, { useEffect, useState } from "react";
import ParentService from "../service/ParentService";
import { Link, useNavigate } from "react-router-dom";


export default function ParentTable(){
    const[arr,setarr] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[]);

    const navigate = useNavigate();

    const fetchdata=()=>{
        ParentService.getAllParents()
        .then((result)=>{
            console.log(result.data);
           setarr(result.data);
           //setarr([...arr,result.data])
            console.log("database data")
            console.log(arr);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    const deleteParent=(parentId)=>{
        ParentService.deleteparent(parseFloat(parentId))
        .then((result)=>{
            console.log("parent delete succcessful")
            console.log(result)
            navigate("/parenttable")
        })
        .catch((err)=>{
            console.log("parent delete unsucccessful")
            console.log(err);
            navigate("/home")
        })
    }
    return(
        <div>
            <Link to="/parentregister">
                <button type="button" name="btn" id="btn" className="btn btn-primary">Add Parent</button>
            </Link>
            <Link to="/login">
                <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
            </Link>
            <br></br><br></br>

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
                            <button type="button" name="btn" id="btn" className="btn btn-danger" onClick={()=>{deleteParent(parent.parentId)}}>Delete</button>
                        
                            <Link to={`/update/${parent.parentId}`} state={{parentdata:parent}}>
                            <button type="button" name="btn" id="btn" className="btn btn-info">Edit</button>
                            </Link>
                        </td>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}