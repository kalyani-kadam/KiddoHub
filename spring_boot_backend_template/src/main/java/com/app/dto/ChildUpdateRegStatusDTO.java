package com.app.dto;

import com.app.entities.ChildRegStatusEnum;

public class ChildUpdateRegStatusDTO {
	private Long childId;
	private ChildRegStatusEnum childRegStatusEnum;
	
	public Long getChildId() {
		return childId;
	}
	public void setChildId(Long childId) {
		this.childId = childId;
	}
	public ChildRegStatusEnum getChildRegStatusEnum() {
		return childRegStatusEnum;
	}
	public void setChildRegStatusEnum(ChildRegStatusEnum childRegStatusEnum) {
		this.childRegStatusEnum = childRegStatusEnum;
	}
	@Override
	public String toString() {
		return "ChildUpdateRegStatusDTO [childId=" + childId + ", childRegStatusEnum=" + childRegStatusEnum + "]";
	}
	public ChildUpdateRegStatusDTO() {
		super();
	}
	
	
}
