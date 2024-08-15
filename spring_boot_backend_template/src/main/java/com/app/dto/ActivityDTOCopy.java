package com.app.dto;

import java.time.LocalDate;

public class ActivityDTOCopy {

	private Long activityId;	
	private String name;	
	private String description;	
	private int no_childs;
	private String ageGroup;
	private LocalDate schedule;
	
	public ActivityDTOCopy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ActivityDTOCopy(Long activityId, String name, String description, int no_childs, String ageGroup,
			LocalDate schedule) {
		super();
		this.activityId = activityId;
		this.name = name;
		this.description = description;
		this.no_childs = no_childs;
		this.ageGroup = ageGroup;
		this.schedule = schedule;
	}

	public Long getActivityId() {
		return activityId;
	}

	public void setActivityId(Long activityId) {
		this.activityId = activityId;
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
		return "ActivityDTOCopy [activityId=" + activityId + ", name=" + name + ", description=" + description
				+ ", no_childs=" + no_childs + ", ageGroup=" + ageGroup + ", schedule=" + schedule + "]";
	}
	
	

}
