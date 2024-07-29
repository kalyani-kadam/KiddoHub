package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ChildDTO;
import com.app.repository.ChildRepository;

@Transactional
@Service
public class ChildServiceImpl implements ChildService {

	@Autowired
	private ChildRepository childRepository;
	
	@Autowired 
	private ModelMapper modelMapper;
	
	@Override
	public List<ChildDTO> getAllChilds() {
		return childRepository.findAll()
				.stream()
				.map(entity -> modelMapper.map(entity, ChildDTO.class))
				.collect(Collectors.toList());
	}
	
//	public ChildOfParent childOfParent(Child child) {
//		
//	}
}
