package com.app.dto;

public class PaymentDTO {
	
//	private Long tId;
	private int amount;
		
	public PaymentDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public PaymentDTO(Long tId, int amount) {
		super();
//		this.tId = tId;
		this.amount = amount;
	}


//	public Long gettId() {
//		return tId;
//	}
//	public void settId(Long tId) {
//		this.tId = tId;
//	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	@Override
	public String toString() {
		return "PaymentDTO [amount=" + amount + "]";
	}

}
