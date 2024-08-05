package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="registeredchildren")
public class RegisteredChild {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="reg_child_id")
	private Long regChildId;
	
	@OneToOne
	@JoinColumn(name="child_id",nullable = false)
	private Child child;
	
	
	public RegisteredChild(Long regChildId, Child child) {
		super();
		this.regChildId = regChildId;
		this.child = child;
	}

	public RegisteredChild(Child child) {
		super();
		this.child = child;
	}



	public RegisteredChild() {
		super();
	}

	public Long getRegChildId() {
		return regChildId;
	}

	public void setRegChildId(Long regChildId) {
		this.regChildId = regChildId;
	}

	public Child getChild() {
		return child;
	}

	public void setChild(Child child) {
		this.child = child;
		this.child.getChildId();
	}
	@Override
	public String toString() {
		return "RegisteredChild [regChildId=" + regChildId + ", child=" + child + "]";
	}
	
}
