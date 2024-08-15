import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear all stored data in localStorage
        localStorage.removeItem('childId');
        localStorage.removeItem('childName');
        localStorage.removeItem('emailId');
        localStorage.removeItem('emergencyContact');
        localStorage.removeItem('medicalInfo');
        localStorage.removeItem('gender');
        localStorage.removeItem('allergies');
        localStorage.removeItem('childRegStatusEnum');
        localStorage.removeItem('password');

        // Show a logout message (optional, you can replace this with your own method)
        alert('You have successfully logged out/nThank you!');

        // Redirect to home page
        navigate('/');
    }, [navigate]);

    return null; // No UI is needed for this component
};

export default Logout;
