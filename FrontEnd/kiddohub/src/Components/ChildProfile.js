import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Assuming you're using react-router-dom v6+

const ChildProfile = () => {
    const [childDetails, setChildDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        const storedChildId = localStorage.getItem('childId');
        console.log('Retrieved childId:', storedChildId); // For debugging

        if (!storedChildId) {
            setError('Child ID not found. Redirecting to login...');
            setLoading(false);
            navigate('/login'); // Redirect to login if childId is missing
        } else {
            fetchChildDetails(storedChildId);
        }
    }, [navigate]);

    const fetchChildDetails = (childId) => {
        axios.get(`http://localhost:8080/children/${childId}`) // Ensure the correct URL
            .then(response => {
                setChildDetails(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch child details.');
                setLoading(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
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
            <Link to="/logout">
                <button type="button" name="btn" id="btn" className="btn btn-danger">Logout</button>
            </Link>
            {childDetails ? (
                <div>
                    <h1>Welcome {childDetails.name}</h1>
                    <h3>Your Details</h3>
                    <p><strong>ID : </strong> {childDetails.childId}</p>
                    <p><strong>Name : </strong> {childDetails.name}</p>
                    <p><strong>Allergies : </strong> {childDetails.allergies}</p>
                    <p><strong>medicalInfo : </strong> {childDetails.medicalInfo}</p>
                    <p><strong>EmailId : </strong>{childDetails.emailId}</p>
                    <p><strong>Gender : </strong>{childDetails.gender}</p>
                    <p><strong>Password : </strong>{childDetails.password}</p>
                    {/* <p><strong>Address : </strong>{childDetails.address}</p> */}
                    {/* <p><strong>Guardian's Name:</strong> {childDetails.guardianName}</p> */}
                    <p><strong>Contact Number : </strong> {childDetails.emergencyContact}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <div>No details available for this child.</div>
            )}
        </div>
    );
};

export default ChildProfile;