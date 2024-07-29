package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ParentDTO;
import com.app.repository.ParentRepository;

@Service
@Transactional
public class ParentServiceImpl implements ParentService {

	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	@Override
	public List<ParentDTO> getAllParents() {
		
		return parentRepository.findAll()
				.stream()
				.map(entiry -> modelMapper.map(entiry, ParentDTO.class)).collect(Collectors.toList());
	}

}
