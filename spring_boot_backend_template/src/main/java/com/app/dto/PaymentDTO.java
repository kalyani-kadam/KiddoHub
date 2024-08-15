package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

import com.app.entities.Parent;
import com.app.entities.PaytypeEnum;

public class PaymentDTO extends BaseDTO {
	
	private Long tId;
	private int amount;
	private Long parentId;
	private LocalDate date;
	private PaytypeEnum pType;
		
	public PaymentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDTO(Long tId, int amount, Long parentId, LocalDate date, PaytypeEnum pType) {
		super();
		this.tId = tId;
		this.amount = amount;
		this.parentId = parentId;
		this.date = date;
		this.pType = pType;
	}

	public Long gettId() {
		return tId;
	}

	public void settId(Long tId) {
		this.tId = tId;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public PaytypeEnum getpType() {
		return pType;
	}

	public void setpType(PaytypeEnum pType) {
		this.pType = pType;
	}

	@Override
	public String toString() {
		return "PaymentDTO [tId=" + tId + ", amount=" + amount + ", parentId=" + parentId + ", date=" + date
				+ ", pType=" + pType + "]";
	}


}
