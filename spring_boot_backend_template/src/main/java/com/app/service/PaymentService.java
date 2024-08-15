package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.dto.PaymentDTOCopy;


public interface PaymentService {
	
	List<PaymentDTOCopy> getAllPayments();
	
	ApiResponse addPayment(PaymentDTO payment) throws Exception;
	
	ApiResponse updatePaymentDetails(Long id,PaymentDTO paymentDTO) throws ResourceNotFoundException;
	
	ApiResponse deletePayment(Long id);
}
