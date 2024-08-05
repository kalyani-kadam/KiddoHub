package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.PaymentDTO;
import com.app.entities.Payment;
import com.app.service.PaymentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	private PaymentService _paymentService;
	
	@GetMapping("/getAllPaymentDetails")
	public List<PaymentDTO> getAllActivities() {
		return (_paymentService.getAllPayments());
	}
	
	//pType adding  blank
	@PostMapping("/add")
	public ResponseEntity<?> addPayment(@RequestBody Payment payment){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(_paymentService.addPayment(payment));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updatePayment(@PathVariable Long id, @RequestBody PaymentDTO paymentDTO) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(_paymentService.updatePaymentDetails(id, paymentDTO));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletePayment(@PathVariable Long id) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED)
				.body(_paymentService.deletePayment(id));
	}
	
}
