package com.app.dto;

import java.sql.Date;

import com.app.entities.ChildRegStatusEnum;
import com.app.entities.GenderEnum;
import com.app.entities.Role;

public class ChildDTO extends BaseDTO {

	private Long childId;
	private String name;
	private Date dateOfBirth;
	private GenderEnum gender;
	private String allergies;
	private String medicalInfo;
	private String emergencyContact;
	private ChildRegStatusEnum childRegStatusEnum;
	private String password;
	private String emailId;
	private Long parentID;
	private Role role;
	
	public ChildDTO(Long childId, Long parentID) {
		super();
		this.childId = childId;
		this.parentID = parentID;
	}

	public Long getParentID() {
		return parentID;
	}

	public void setParentID(Long parentID) {
		this.parentID = parentID;
	}

	public void setParent(Long parent) {
		this.parentID = parent;
	}

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

	public ChildRegStatusEnum getChildRegStatusEnum() {
		return childRegStatusEnum;
	}

	public void setChildRegStatusEnum(ChildRegStatusEnum childRegStatusEnum) {
		this.childRegStatusEnum = childRegStatusEnum;
	}

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

	public GenderEnum getGender() {
		return gender;
	}

	public void setGender(GenderEnum gender) {
		this.gender = gender;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}
	
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getMedicalInfo() {
		return medicalInfo;
	}

	public void setMedicalInfo(String medicalInfo) {
		this.medicalInfo = medicalInfo;
	}

	public String getEmergencyContact() {
		return emergencyContact;
	}

	public void setEmergencyContact(String emergencyContact) {
		this.emergencyContact = emergencyContact;
	}

	public ChildDTO() {
		super();
	}

	public ChildDTO(Long childId, String name, Date dateOfBirth, GenderEnum gender, String allergies,
			String medicalInfo, String emergencyContact, ChildRegStatusEnum childRegStatusEnum, String password,
			String emailId, Long parentID, Role role) {
		super();
		this.childId = childId;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.allergies = allergies;
		this.medicalInfo = medicalInfo;
		this.emergencyContact = emergencyContact;
		this.childRegStatusEnum = childRegStatusEnum;
		this.password = password;
		this.emailId = emailId;
		this.parentID = parentID;
		this.role = role;
	}

	@Override
	public String toString() {
		return "ChildDTO [childId=" + childId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
				+ ", childRegStatusEnum=" + childRegStatusEnum + ", password=" + password + ", emailId=" + emailId
				+ ", parentID=" + parentID + ", role=" + role + "]";
	}

//	@Override
//	public String toString() {
//		return "ChildDTO [childId=" + childId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
//				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
//				+ ", childRegStatusEnum=" + childRegStatusEnum + ", password=" + password + ", emailId=" + emailId
//				+ ", parent=" + parentID + "]";
//	}
	

}
