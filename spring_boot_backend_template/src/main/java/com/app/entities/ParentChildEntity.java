package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="parentchild")
public class ParentChildEntity extends BaseEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long childParentId;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinColumn(name="child_id",nullable=false)
	private Child child;
	
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	@JoinColumn(name="parent_id",nullable=false)//,insertable = false)
	private Parent parent;

	public Child getChild() {
		return child;
	}

	public void setChild(Child child) {
		this.child = child;
	}

	public Long getChildParentId() {
		return childParentId;
	}

	public void setChildParentId(Long childParentId) {
		this.childParentId = childParentId;
	}

	public Parent getParent() {
		return parent;
	}

	public void setParent(Parent parent) {
		this.parent = parent;
	}

	public ParentChildEntity() {
		super();
	}

	public ParentChildEntity(Long childParentId, Child child, Parent parent) {
		super();
		this.childParentId = childParentId;
		this.child = child;
		this.parent = parent;
	}

	@Override
	public String toString() {
		return "ParentChildEntity [childParentId=" + childParentId + ", child=" + child + ", parent=" + parent + "]";
	}
	
}
