package com.app.dto;

import java.time.LocalDate;

import com.app.entities.PaytypeEnum;

public class PaymentDTOCopy {
	
	private Long tId;
	private int amount;
	private LocalDate date;
	private PaytypeEnum pType;
		
	public PaymentDTOCopy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDTOCopy(Long tId, int amount, LocalDate date, PaytypeEnum pType) {
		super();
		this.tId = tId;
		this.amount = amount;
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

	

}
