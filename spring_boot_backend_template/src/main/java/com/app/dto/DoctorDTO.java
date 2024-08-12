package com.app.dto;

import javax.persistence.Column;

import com.app.entities.ChildRegStatusEnum;

public class DoctorDTO {

//	private Long doctorId;
	private String name;
	private String specialization;
	private Long PhoneNo;
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

	// public Long getDoctorId() {
//		return doctorId;
//	}
//	public void setDoctorId(Long doctorId) {
//		this.doctorId = doctorId;
//	}
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

	public Long getPhoneNo() {
		return PhoneNo;
	}

	public void setPhoneNo(Long phoneNo) {
		PhoneNo = phoneNo;
	}

	@Override
	public String toString() {
		return "DoctorDTO [name=" + name + ", specialization=" + specialization + ", PhoneNo=" + PhoneNo + "]";
	}

	public DoctorDTO() {
		super();
	}

	public DoctorDTO(String name, String specialization, Long phoneNo, ChildRegStatusEnum childRegStatusEnum) {
		super();
		this.name = name;
		this.specialization = specialization;
		PhoneNo = phoneNo;
		this.childRegStatusEnum = childRegStatusEnum;
	}

}
