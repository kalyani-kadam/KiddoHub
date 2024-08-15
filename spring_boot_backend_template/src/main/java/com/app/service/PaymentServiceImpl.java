package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ActivityDTO;
import com.app.dto.ApiResponse;
import com.app.dto.PaymentDTO;
import com.app.entities.Activity;
import com.app.entities.Parent;
import com.app.entities.Payment;
import com.app.repository.ParentRepository;
import com.app.repository.PaymentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements  PaymentService{

	@Autowired
	private PaymentRepository _paymentRepository;
	
	@Autowired
	private ParentRepository _parentRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<PaymentDTO> getAllPayments() {
		
		return (_paymentRepository.findAll().stream()
				.map(entity -> mapper.map(entity, PaymentDTO.class))
				.collect(Collectors.toList()));
	}

	@Override
	public ApiResponse addPayment(PaymentDTO payment) throws Exception {
		Parent parent = _parentRepository.findById(payment.getParentId()).orElseThrow(()-> new Exception("Parent Not Found"));
		Payment newPayment = mapper.map(payment, Payment.class);
		newPayment.setParentId(parent);
		_paymentRepository.save(newPayment);	
		return new ApiResponse("New Payment Added!!");
	}

	@Override
	public ApiResponse updatePaymentDetails(Long id, PaymentDTO paymentDTO) throws ResourceNotFoundException {
		Payment existingPayment = _paymentRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Transaction!!"));
		
		existingPayment.setAmount(paymentDTO.getAmount());
		existingPayment.setUpdatedOn(paymentDTO.getUpdatedOn());
		return new ApiResponse("Payment Details Updated Successfully! [id] :"+existingPayment.gettId());
	}

	@Override
	public ApiResponse deletePayment(Long id) {
		if(_paymentRepository.existsById(id)) {
			_paymentRepository.deleteById(id);
			return new ApiResponse("Transaction Deleted Successfull!");
		}
		return new ApiResponse("Transaction Not Found!");
	}
	
	

}
