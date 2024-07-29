package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.DoctorDTO;
import com.app.repository.DoctorRepository;

@Service
@Transactional

public class DoctorServiceImpl implements DoctorService {

	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<DoctorDTO> getAllDoctors() {
		
		return doctorRepository.findAll()
				.stream()
				.map(entiry -> modelMapper.map(entiry, DoctorDTO.class))
				.collect(Collectors.toList());
	}

}
