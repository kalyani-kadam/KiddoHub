package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="appointments")
public class DoctorChildAppoinment extends BaseEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long appoinmentId;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinColumn(name="child_id",nullable=false)
	private Child child;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinColumn(name="doctor_id",nullable=false)
	private Doctor doctor;

	public Long getAppoinmentId() {
		return appoinmentId;
	}

	public void setAppoinmentId(Long appoinmentId) {
		this.appoinmentId = appoinmentId;
	}

	public Child getChild() {
		return child;
	}

	public void setChild(Child child) {
		this.child = child;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public DoctorChildAppoinment(Long appoinmentId, Child child, Doctor doctor) {
		super();
		this.appoinmentId = appoinmentId;
		this.child = child;
		this.doctor = doctor;
	}

	public DoctorChildAppoinment() {
		super();
	}

	@Override
	public String toString() {
		return "DoctorChildAppoinment [appoinmentId=" + appoinmentId + ", child=" + child + ", doctor=" + doctor + "]";
	}
}
