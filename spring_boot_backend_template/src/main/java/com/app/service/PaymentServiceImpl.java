package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ActivityDTO;
import com.app.dto.PaymentDTO;
import com.app.repository.PaymentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements  PaymentService{

	@Autowired
	private PaymentRepository _paymentRepository;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<PaymentDTO> getAllPayments() {
		
		return (_paymentRepository.findAll().stream()
				.map(entity -> mapper.map(entity, PaymentDTO.class))
				.collect(Collectors.toList()));
	}
	
	

}
