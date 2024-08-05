package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="payments")
public class Payment {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Column(name="transaction_id",unique = true)
	private Long tId;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="parent_id",nullable=false)
	private Parent parentId;
	
	private LocalDate date;
	
	@NotNull
	private int amount;
	
	@Enumerated(EnumType.STRING)
	@Column(name="payment_type")
	private PayType pType;

	public Long gettId() {
		return tId;
	}

	public void settId(Long tId) {
		this.tId = tId;
	}

	
	public Parent getParentId() {
		return parentId;
	}

	public void setParentId(Parent parentId) {
		this.parentId = parentId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public PayType getpType() {
		return pType;
	}

	public void setpType(PayType pType) {
		this.pType = pType;
	}

	@Override
	public String toString() {
		return "Payment [tId=" + tId + ", date=" + date + ", amount=" + amount + ", pType=" + pType + "]";
	}
	
	
	
	

}