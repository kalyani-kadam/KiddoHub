package com.app.dto;

public class ParentDTO extends BaseDTO {

	private Long parentId;
	private String name;
	private Long phoneNo;
	private String emailId;
	
	public Long getParentId() {
		return parentId;
	}
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public String toString() {
		return "ParentDTO [parentId=" + parentId + ", name=" + name + ", phoneNo=" + phoneNo + ", emailId=" + emailId
				+ ", getCreationDate()=" + getCreationDate() + ", getUpdatedOn()="
				+ getUpdatedOn() + "]";
	}
	
	
}
