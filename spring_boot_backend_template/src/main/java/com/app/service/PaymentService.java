package com.app.service;

import java.util.List;

import com.app.dto.PaymentDTO;

public interface PaymentService {
	
	List<PaymentDTO> getAllPayments();
}
