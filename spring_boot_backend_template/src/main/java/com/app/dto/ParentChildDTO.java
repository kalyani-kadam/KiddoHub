package com.app.dto;

public class ParentChildDTO {
	private Long childParentId;
//	private ChildDTO childId;
//	private ParentDTO parentId;
	public Long getChildParentId() {
		return childParentId;
	}
	public void setChildParentId(Long childParentId) {
		this.childParentId = childParentId;
	}
//	public ChildDTO getChildId() {
//		return childId;
//	}
//	public void setChildId(ChildDTO childId) {
//		this.childId = childId;
//	}
//	public ParentDTO getParentId() {
//		return parentId;
//	}
//	public void setParentId(ParentDTO parentId) {
//		this.parentId = parentId;
//	}
//	@Override
//	public String toString() {
//		return "ParentChildDTO [childParentId=" + childParentId + ", childId=" + childId + ", parentId=" + parentId
//				+ "]";
//	}
	@Override
	public String toString() {
		return "ParentChildDTO [childParentId=" + childParentId + "]";
	}
	
	
	
	
	
}
