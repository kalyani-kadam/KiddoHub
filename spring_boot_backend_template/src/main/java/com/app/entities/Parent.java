package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="parent")
public class Parent extends BaseEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="parent_id")
	private Long parentId;
	
	@Column(name="name",nullable = false)
	private String name;
	
	@Column(name="address",nullable = false)
	private String address;
	
	@Column(name="phone_no",nullable = false)
	private Long phoneNo;
	
	@Column(name="email_id",nullable = false)
	private String emailId;	
	
//	@OneToMany(mappedBy = "parent",cascade=CascadeType.ALL,fetch=FetchType.LAZY)
//	private List<Child> childs;

	public Parent() {
		super();
	}

	public Parent(Long parentId, String name, String address, Long phoneNo, String emailId) {
		super();
		this.parentId = parentId;
		this.name = name;
		this.address = address;
		this.phoneNo = phoneNo;
		this.emailId = emailId;
	}

	public Long getParentId() {
		return parentId;
	}

//	public List<Child> getChilds() {
//		return childs;
//	}
//
//	public void setChilds(List<Child> childs) {
//		this.childs = childs;
//	}
	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
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
		return "Parent [parentId=" + parentId + ", name=" + name + ", address=" + address + ", phoneNo=" + phoneNo
				+ ", emailId=" + emailId + "]";
	}
	
}
