package com.app.dto;

import javax.persistence.Column;

public class DoctorDTO {

//	private Long doctorId;
	private String name;
	private String specialization;	
	private Long PhoneNo;
	
//	public Long getDoctorId() {
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
		return "DoctorDTO [name=" + name + ", specialization=" + specialization
				+ ", PhoneNo=" + PhoneNo + "]";
	}
	public DoctorDTO() {
		super();
	}
	public DoctorDTO(Long doctorId, String name, String specialization, Long phoneNo) {
		super();
//		this.doctorId = doctorId;
		this.name = name;
		this.specialization = specialization;
		PhoneNo = phoneNo;
	}
	
	
}
