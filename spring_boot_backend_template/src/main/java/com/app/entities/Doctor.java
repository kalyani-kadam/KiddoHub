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
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String specialization;	
	@Column(name="phone_no",nullable = false)
	private String phoneNo;
	@Column(name = "email_id", nullable = false,unique = true)
	private String emailId;
	@Column(name="password",nullable=false)
	private String password;
	
//	@ElementCollection
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="child_id",nullable=false)
	private Child child;
	
	public Doctor() {
		super();
	}
	
	public Doctor(Long doctorId, String name, String specialization, String phoneNo, String emailId, String password
			) {
		super();
		this.doctorId = doctorId;
		this.name = name;
		this.specialization = specialization;
		this.phoneNo = phoneNo;
		this.emailId = emailId;
		this.password = password;
//		this.child = child;
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
	public String getPhoneNo() {
		return phoneNo;
	}
	
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", name=" + name + ", specialization=" + specialization + ", phoneNo="
				+ phoneNo + ", emailId=" + emailId + ", password=" + password + ", child=" + child + "]";
	}
	
	
}
