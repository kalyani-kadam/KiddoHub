package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="doctors")
public class Doctor extends BaseEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="doctor_id",nullable = false)
	private Long doctorId;
	private String name;
	@Column(nullable = false)
	private String specialization;	
	@Column(name="phone_no",nullable = false)
	private Long phoneNo;
	
	@Column(name="password",nullable=false)
	private String password;
	
//	@ElementCollection
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="child_id",nullable=false)
	private Child child;
	
	public Doctor() {
		super();
	}
	
	public Doctor(Long doctorId, String name, String specialization, Long phoneNo, String password, Child child) {
		super();
		this.doctorId = doctorId;
		this.name = name;
		this.specialization = specialization;
		this.phoneNo = phoneNo;
		this.password = password;
		this.child = child;
	}

	public void setChild(Child child) {
		this.child = child;
	}

	public Child getChild() {
		return child;
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
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		phoneNo = phoneNo;
	}
	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", name=" + name + ", specialization=" + specialization + ", PhoneNo="
				+ phoneNo + "]";
	}
	
}
