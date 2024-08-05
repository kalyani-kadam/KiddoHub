package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.ParentChildDTO;
import com.app.entities.ParentChildEntity;
import com.app.repository.ParentChildRepository;

@Service
@Transactional
public class ParentChildServiceImpl implements ParentChildService {

	@Autowired
	private ParentChildRepository parentChildRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<ParentChildDTO> getAllParentChild() {
		return parentChildRepository.findAll().stream().
				map(entity -> modelMapper.map(entity, ParentChildDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addParentChild(ParentChildEntity parentChildEntity) {
		
		ParentChildEntity newparentChild = modelMapper.map(parentChildEntity, ParentChildEntity.class);
		parentChildRepository.save(newparentChild);
		return new ApiResponse("New parent child added with Id:"+newparentChild.getChildParentId());
	}

}
