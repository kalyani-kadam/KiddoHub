package com.app.dto;

public class DoctorDTO extends BaseDTO {

	private Long doctorId;
	private String name;
	private String specilization;
	private Long phoneNo;
	private Long childId;
	
	public Long getChildId() {
		return childId;
	}
	public void setChildId(Long childId) {
		this.childId = childId;
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
	public String getSpecilization() {
		return specilization;
	}
	public void setSpecilization(String specilization) {
		this.specilization = specilization;
	}
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	@Override
	public String toString() {
		return "DoctorDTO [doctorId=" + doctorId + ", name=" + name + ", specilization=" + specilization + ", phoneNo="
				+ phoneNo + ", childId=" + childId + ", getCreationDate()=" + getCreationDate() + ", getUpdatedOn()="
				+ getUpdatedOn() + "]";
	}
	
}
