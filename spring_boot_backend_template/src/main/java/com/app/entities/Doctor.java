package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor extends BaseEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doctor_id",nullable = false)
	private Long doctorId;
	private String name;
	private String specialization;	
	@Column(name="phone_no",nullable = false)
	private Long PhoneNo;
	
	public Doctor() {
		super();
	}
	public Doctor(Long doctorId, String name, String specialization, Long phoneNo) {
		super();
		this.doctorId = doctorId;
		this.name = name;
		this.specialization = specialization;
		PhoneNo = phoneNo;
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
	public Long getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		PhoneNo = phoneNo;
	}
	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", name=" + name + ", specialization=" + specialization + ", PhoneNo="
				+ PhoneNo + "]";
	}
	
}
