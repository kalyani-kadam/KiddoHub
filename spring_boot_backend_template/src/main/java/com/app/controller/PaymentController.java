package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PaymentDTO;
import com.app.service.PaymentService;

@RestController
@RequestMapping("/Payment")
public class PaymentController {

	@Autowired
	private PaymentService _paymentService;
	
	@GetMapping("/getAllPaymentDetails")
	public List<PaymentDTO> getAllActivities() {
		return (_paymentService.getAllPayments());
	}
	
}
