package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ParentDTO;
import com.app.entities.Child;
import com.app.entities.Parent;
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
	@Override
	public ApiResponse addParent(ParentDTO parentDTO) {
		Parent newparent = modelMapper.map(parentDTO, Parent.class);
		parentRepository.save(newparent);
		return new ApiResponse("Addded new parent with ID:"+newparent.getParentId());	
	}
	@Override
	public ApiResponse deleteParentDetails(Long id) {
		if(parentRepository.existsById(id)){
			parentRepository.deleteById(id);
			return new ApiResponse("parent deleted");
		}
		return new ApiResponse("parent deletion failed");
	}
	@Override
	public ApiResponse updateParentDetails(Long id, ParentDTO parentdto) throws ResourceNotFoundException {
		Parent existingParent = parentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Parent with this id is not found"));
		
		existingParent.setAddress(parentdto.getAddress());
		existingParent.setEmailId(parentdto.getEmailId());
		existingParent.setName(parentdto.getName());
		existingParent.setPhoneNo(parentdto.getPhoneNo());
		
		return new ApiResponse("Parents details updated successfully");
	}

}
