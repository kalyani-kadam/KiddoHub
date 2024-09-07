import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Assuming you're using react-router-dom v6+
import '../css/ChildProfile.css'; // Import the CSS file

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
        <div className="content">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div>
                <div className="sidebar">
                    <a href="/home"><i className="fa fa-fw fa-home"></i> Home</a>
                    <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
                    <a href="/rules"><i className="fa fa-fw fa-square"></i> Rules </a>
                    <a href="/aboutus"><i className="fa fa-fw fa-child"></i> About Us </a>
                    <a href="/contactus"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                </div>
            </div>

            <Link to="/logout">
                <button type="button" className="btn btn-danger">Logout</button>
            </Link>
            &nbsp;&nbsp;
            <Link to="/payment">
                <button type="button" className="btn btn-primary">Make Payment</button>
            </Link>

            {childDetails ? (
                <div className="child-details">
                    <h1>Welcome {childDetails.name}</h1>
                    <h3>Your Details</h3>
                    <table className="child-details-table">
                        <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Allergies</th>
                                <th>Medical Info</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Contact Number</th>
                                <th>Status</th>
                        </thead>
                        <tbody>                         
                                <td>{childDetails.childId}</td>
                            
                                <td>{childDetails.name}</td>
                    
                                <td>{childDetails.allergies}</td>
                             
                                <td>{childDetails.medicalInfo}</td>
                            
                                <td>{childDetails.emailId}</td>
                            
                                <td>{childDetails.gender}</td>
                            
                                <td>{childDetails.emergencyContact}</td>
                        
                                <td>{childDetails.childRegStatusEnum}</td>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No details available for this child.</div>
            )}
        </div>
    );
};

export default ChildProfile;
