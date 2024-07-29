package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class BaseDTO {

	@JsonProperty(access = Access.READ_ONLY)
	//@CreationTimestamp
	private LocalDate creationDate;
	
	@JsonProperty(access = Access.READ_ONLY)
	//@UpdateTimestamp
	private LocalDate updatedOn;
	
	public LocalDate getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(LocalDate creationDate) {
		this.creationDate = creationDate;
	}
	public LocalDate getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(LocalDate updatedOn) {
		this.updatedOn = updatedOn;
	}
//	@Override
//	public String toString() {
//		return "BaseDTO [id=" + id + ", creationDate=" + creationDate + ", updatedOn=" + updatedOn + "]";
//	}
	
}
