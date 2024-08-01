package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="staffs")
public class Staff {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Column(name="staff_id",unique = true)
	private Long staffId;
	
	@Column(name="staff_name",length=50)
	private String name;
	
	@Enumerated(EnumType.STRING)
	@NotNull
	private Posts post;
	
	
	@Column(name="joining_date")
	private LocalDate joiningDate;
	
	@Column(name="mobile_no", unique=true)
	@NotNull
	private long mobNo;
	
	@Column(unique = true)
	private String email;
	
	private String address;
	
	

	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public Staff(Long staff_id, String name, @NotNull Posts post, LocalDate joiningDate, @NotNull long mobNo,
			String email, String address) {
		super();
		this.staffId = staff_id;
		this.name = name;
		this.post = post;
		this.joiningDate = joiningDate;
		this.mobNo = mobNo;
		this.email = email;
		this.address = address;
	}



	public Long getStaff_id() {
		return staffId;
	}

	public void setStaff_id(Long staff_id) {
		this.staffId = staff_id;
	}

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

	@Override
	public String toString() {
		return "Staff [staff_id=" + staffId + ", name=" + name + ", post=" + post + ", joiningDate=" + joiningDate
				+ ", mobNo=" + mobNo + ", email=" + email + ", address=" + address + "]";
	}
	
	

}
