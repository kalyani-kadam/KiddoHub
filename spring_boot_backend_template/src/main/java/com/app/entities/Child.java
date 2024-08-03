package com.app.entities;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="children")
public class Child extends BaseEntity{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="child_id")
	private Long childId;
	
	@Column(name="name",nullable = false)
	private String name;
	
	@Column(name="date_of_birth",nullable = false)
	private Date dateOfBirth;
	
//	@Column(name="gender",nullable = false)
	
	@Enumerated(EnumType.STRING)
	private GenderEnum gender;
	
	@Column(name="allergies",nullable = false)
	private String allergies;
	
	@Column(name="medical_info",nullable = false)
	private String medicalInfo;
	
	@Column(name="emergency_contact",nullable = false)
	private Long emergencyContact;
		
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="parent_id",nullable=false)
	private Parent parent;
	
//	@OneToMany(mappedBy = "child",cascade=CascadeType.ALL)
//	private List<Child> childs;
	
	public Child() {
		super();
	}
	
	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public Child(Long childId, String name, Date dateOfBirth, GenderEnum gender, String allergies, String medicalInfo,
		Long emergencyContact, Parent parent, List<Child> childs) {
	super();
	this.childId = childId;
	this.name = name;
	this.dateOfBirth = dateOfBirth;
	this.gender = gender;
	this.allergies = allergies;
	this.medicalInfo = medicalInfo;
	this.emergencyContact = emergencyContact;
	this.parent = parent;
//	this.childs = childs;
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
		return "Child [childId=" + childId + ", name=" + name + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", allergies=" + allergies + ", medicalInfo=" + medicalInfo + ", emergencyContact=" + emergencyContact
				+ "]";
	}
}