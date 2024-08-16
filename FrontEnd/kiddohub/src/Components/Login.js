import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChildLogin = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/children/login', {
                emailId,
                password
            });

            // Ensure that response.data contains the correct structure
            const {role, childId, name, emailId: email, emergencyContact, medicalInfo, gender, allergies, childRegStatusEnum } = response.data;
            if(role==="ROLE_ADMIN"){
                navigate("/admin")
            }
            if(role ==="ROLE_USER" && childId && name) {
                // Store the childId and other details in localStorage
                localStorage.setItem('childId', childId);
                localStorage.setItem('childName', name);
                localStorage.setItem('emailId', email);
                localStorage.setItem('emergencyContact', emergencyContact);
                localStorage.setItem('medicalInfo', medicalInfo);
                localStorage.setItem('gender', gender);
                localStorage.setItem('allergies', allergies);
                localStorage.setItem('childRegStatusEnum', childRegStatusEnum);
                localStorage.setItem('password', password);
                
                // Navigate to profile page
                navigate('/profile');
            } else {
                // Handle cases where the response does not contain childId or name
                setError('Failed to log in. Please try again.');
            }
        } catch (err) {
            setError('Invalid email or password');
            console.error(err);
        }
    };

    return (
        <div className="container">
            <h2>Child Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email ID</label>
                    <input
                        type="email"
                        className="form-control"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
};

export default ChildLogin;