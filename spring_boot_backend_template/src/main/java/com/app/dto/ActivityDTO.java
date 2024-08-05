package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Staff;

public class ActivityDTO {
	
	private Staff staffId;	
	private String name;	
	private String description;	
	private int no_childs;
	private String ageGroup;
	private LocalDate schedule;
	

	public ActivityDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ActivityDTO(Staff staff_id, String name, String description, int no_childs, String ageGroup,
			LocalDate schedule) {
		super();
		this.staffId = staff_id;
		this.name = name;
		this.description = description;
		this.no_childs = no_childs;
		this.ageGroup = ageGroup;
		this.schedule = schedule;
	}


	public Staff getStaffId() {
		return staffId;
	}

	public void setStaffId(Staff staff_id) {
		this.staffId = staff_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getNo_childs() {
		return no_childs;
	}

	public void setNo_childs(int no_childs) {
		this.no_childs = no_childs;
	}

	public String getAgeGroup() {
		return ageGroup;
	}

	public void setAgeGroup(String ageGroup) {
		this.ageGroup = ageGroup;
	}


	public LocalDate getSchedule() {
		return schedule;
	}

	public void setSchedule(LocalDate schedule) {
		this.schedule = schedule;
	}

	@Override
	public String toString() {
		return "ActivityDTO [name=" + name + ", description=" + description + ", no_childs="
				+ no_childs + ", ageGroup=" + ageGroup + "]";
	}
	
	
	
}
