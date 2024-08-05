package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;

import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.entities.Payment;


public interface PaymentService {
	
	List<PaymentDTO> getAllPayments();
	
	ApiResponse addPayment(Payment payment);
	
	ApiResponse updatePaymentDetails(Long id,PaymentDTO paymentDTO) throws ResourceNotFoundException;
	
	ApiResponse deletePayment(Long id);
}
