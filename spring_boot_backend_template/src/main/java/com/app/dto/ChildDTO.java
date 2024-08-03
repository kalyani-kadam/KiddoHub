package com.app.dto;

import java.sql.Date;

import com.app.entities.GenderEnum;
import com.app.entities.Parent;

public class ChildDTO extends BaseDTO{
	
	private Long childId;
	private String name;
	private Date dateOfBirth;
	private GenderEnum gender;
	private String allergies;
	private String medicalInfo;
	private Long emergencyContact;
	private ParentDTO parentId;
	
	
	public ParentDTO getParentId() {
		return parentId;
	}
	public void setParentId(ParentDTO parentId) {
		this.parentId = parentId;
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
		return "ChildDTO [name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
				+  ", getCreationDate()=" + getCreationDate() + ", getUpdatedOn()="
				+ getUpdatedOn() + "]";
	}
	public ChildDTO(String name, Date dateOfBirth, GenderEnum gender, String allergies, String medicalInfo,
			Long emergencyContact, Parent parentId) {
		super();
//		this.childId = childId;
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.allergies = allergies;
		this.medicalInfo = medicalInfo;
		this.emergencyContact = emergencyContact;
	}
	public ChildDTO() {
		super();
	}	
	
}
