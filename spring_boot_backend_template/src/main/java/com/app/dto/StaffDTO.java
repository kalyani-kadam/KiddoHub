package com.app.dto;

import java.time.LocalDate;


import com.app.entities.Posts;

public class StaffDTO {

	private Long staffId;
	private String name;
	private Posts post;
	private LocalDate joiningDate;
	private long mobNo;
	private String email;	
	private String address;
	
	
	
	public StaffDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Long getStaffId() {
		return staffId;
	}



	public void setStaffId(Long staffId) {
		this.staffId = staffId;
	}



	public StaffDTO(Long staffId, String name, Posts post, LocalDate joiningDate, long mobNo, String email,
			String address) {
		super();
		this.staffId = staffId;
		this.name = name;
		this.post = post;
		this.joiningDate = joiningDate;
		this.mobNo = mobNo;
		this.email = email;
		this.address = address;
	}



//	public Long getStaffId() {
//		return staffId;
//	}
//	public void setStaffId(Long staffId) {
//		this.staffId = staffId;
//	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Posts getPost() {
		return post;
	}
	public void setPost(Posts post) {
		this.post = post;
	}
	public LocalDate getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}
	public long getMobNo() {
		return mobNo;
	}
	public void setMobNo(long mobNo) {
		this.mobNo = mobNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
