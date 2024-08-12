package com.app.dto;

import java.sql.Date;

import com.app.entities.ChildRegStatusEnum;
import com.app.entities.GenderEnum;
import com.app.entities.Parent;

public class ChildDTO extends BaseDTO{
	
	private Long childId;
	private String name;
	private Date dateOfBirth;
	private GenderEnum gender;
	private String allergies;
	private String medicalInfo;
	private String emergencyContact;
	private ParentDTO parentId;
	private ChildRegStatusEnum childRegStatusEnum;
	private String password;
	
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
	public String getEmergencyContact() {
		return emergencyContact;
	}
	public void setEmergencyContact(String emergencyContact) {
		this.emergencyContact = emergencyContact;
	}
	
	@Override
	public String toString() {
		return "ChildDTO [childId=" + childId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
				+ ", parentId=" + parentId + ", childRegStatusEnum=" + childRegStatusEnum + "]";
	}
	public ChildDTO(String name, Date dateOfBirth, GenderEnum gender, String allergies, String medicalInfo,
			String emergencyContact, ParentDTO parentId, ChildRegStatusEnum childRegStatusEnum) {
		super();
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.allergies = allergies;
		this.medicalInfo = medicalInfo;
		this.emergencyContact = emergencyContact;
		this.parentId = parentId;
		this.childRegStatusEnum = childRegStatusEnum;
	}
	public ChildDTO() {
		super();
	}	
	
}
