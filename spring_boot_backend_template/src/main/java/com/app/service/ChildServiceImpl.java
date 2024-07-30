package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.stereotype.Service;

import com.app.dto.ChildDTO;
import com.app.entities.Child;
import com.app.entities.Parent;
import com.app.repository.ChildRepository;
import com.app.repository.ParentRepository;

@Transactional
@Service
public class ChildServiceImpl implements ChildService {

	@Autowired
	private ChildRepository childRepository;
	
	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired 
	private ModelMapper modelMapper;
	
	@Override
	public List<ChildDTO> getAllChilds(){
//		ChildDTO dto;
//		ChildDTO dto = new ChildDTO();
//		Parent parent = parentRepository.findById(dto.getParentId())
//				.orElseThrow(() -> new Exception("Invalid parent Id"));
//		dto.setParentId(c);
//		List<ChildDTO> dto = 
		return childRepository.findAll()
				.stream()
				.map(entity -> modelMapper.map(entity, ChildDTO.class))
				.collect(Collectors.toList());		
	}
	
//	public static ChildOfParent toChildDTO(Child child) {
//		ChildDTO dto = new ChildDTO();
//		dto.setChildId(child.getChildId());
//		dto.setName(child.getName());		
//	}
	
	public List<Child> getAllChild(){
		return childRepository.findAll();
	}
}
