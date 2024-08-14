package com.app.dto;

import com.app.entities.ChildRegStatusEnum;

public class DoctorDTO {

	private Long doctorId;
	private String name;
	private String specialization;
	private String phoneNo;
	private ChildRegStatusEnum childRegStatusEnum;
	private String password;
	private String emailId;
	private Long childId;
	
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

	
	public Long getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(Long doctorId) {
		this.doctorId = doctorId;
	}
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public DoctorDTO() {
		super();
	}

//	public DoctorDTO(String name, String specialization, Long phoneNo, ChildRegStatusEnum childRegStatusEnum,
//			String password, String emailId) {
//		super();
//		this.name = name;
//		this.specialization = specialization;
//		PhoneNo = phoneNo;
//		this.childRegStatusEnum = childRegStatusEnum;
//		this.password = password;
//		this.emailId = emailId;
//	}

	
	public Long getChildId() {
		return childId;
	}

	public void setChildId(Long childId) {
		this.childId = childId;
	}

	public DoctorDTO(Long doctorId, Long childId) {
		super();
		this.doctorId = doctorId;
		this.childId = childId;
	}

	@Override
	public String toString() {
		return "DoctorDTO [doctorId=" + doctorId + ", name=" + name + ", specialization=" + specialization
				+ ", PhoneNo=" + phoneNo + ", childRegStatusEnum=" + childRegStatusEnum + ", password=" + password
				+ ", emailId=" + emailId + ", childId=" + childId + "]";
	}
}
