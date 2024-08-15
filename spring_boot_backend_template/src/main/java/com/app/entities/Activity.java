package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "activities")
public class Activity {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Column( name = "activity_id", unique = true)
	private Long activityId;
	
	//(fetch = FetchType.LAZY) 
	//(cascade = CascadeType.ALL) err : java.sql.SQLIntegrityConstraintViolationException: Cannot delete or update a parent row: a foreign key constraint fails
	@OneToOne
	@JoinColumn(name="staff_id",nullable=false)
	private Staff staffId;
	
	@Column(length=50)
	@NotNull
	private String name;
	
	private String description;
	
	@Column(name="no_of_children")
	private int noChilds;
	
	@Column(name="age_group")
	private String ageGroup;
	
	//private LocalDateTime schedule;
	private LocalDate schedule;
	
	
	
	
	public Activity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Activity(Long activityId, Staff staffId, @NotNull String name, String description, int noChilds,
			String ageGroup, LocalDate schedule) {
		super();
		this.activityId = activityId;
		this.staffId = staffId;
		this.name = name;
		this.description = description;
		this.noChilds = noChilds;
		this.ageGroup = ageGroup;
		this.schedule = schedule;
	}
	
	


	public Activity(Long activityId, @NotNull String name, String description, int noChilds, String ageGroup,
			LocalDate schedule) {
		super();
		this.activityId = activityId;
		this.name = name;
		this.description = description;
		this.noChilds = noChilds;
		this.ageGroup = ageGroup;
		this.schedule = schedule;
	}


	public Long getActivityId() {
		return activityId;
	}
	public void setActivityId(Long activityId) {
		this.activityId = activityId;
	}
	public Staff getStaffId() {
		return staffId;
	}
	public void setStaffId(Staff staffId) {
		this.staffId = staffId;
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
		return noChilds;
	}
	public void setNo_childs(int no_childs) {
		this.noChilds = no_childs;
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
		return "Activity [activity_id=" + activityId + ", staff_id=" + staffId + ", name=" + name + ", description="
				+ description + ", no_childs=" + noChilds + ", ageGroup=" + ageGroup + ", schedule=" + schedule + "]";
	}
	
	
	
	
}
