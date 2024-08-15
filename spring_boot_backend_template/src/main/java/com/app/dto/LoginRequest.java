package com.app.dto;

public class LoginRequest {
    private String emailId;
    private String password;

    // Default constructor
    public LoginRequest() {}

    // Constructor with parameters
    public LoginRequest(String emailId, String password) {
        this.emailId = emailId;
        this.password = password;
    }

    // Getters and setters
    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

