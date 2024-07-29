package com.app.dto;

import java.sql.Date;

public class ChildDTO extends BaseDTO{
	
	private Long childId;
	private String name;
	private Date dateOfBirth;
	private String gender;
	private String allergies;
	private String medicalInfo;
	private Long emergencyContact;
	public Long getChildId() {
		return childId;
	}
	public void setChildId(Long childId) {
		this.childId = childId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAllergies() {
		return allergies;
	}
	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}
	public String getMedicalInfo() {
		return medicalInfo;
	}
	public void setMedicalInfo(String medicalInfo) {
		this.medicalInfo = medicalInfo;
	}
	public Long getEmergencyContact() {
		return emergencyContact;
	}
	public void setEmergencyContact(Long emergencyContact) {
		this.emergencyContact = emergencyContact;
	}
	@Override
	public String toString() {
		return "ChildDTO [childId=" + childId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
				+ ", getCreationDate()=" + getCreationDate() + ", getUpdatedOn()=" + getUpdatedOn() + "]";
	}
	
	
}
