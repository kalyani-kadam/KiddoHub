package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.entities.Child;

public interface ChildService {
	//List<ChildDTO> getAll();

	List<ChildDTO> getAllChilds();
	public List<Child> getAllChild();
	
	public ApiResponse addChild(Child child)throws Exception;
	public ApiResponse deleteChildDetails(Long id);
	public ApiResponse updateChildDetails(Long id,ChildDTO childdto)throws ResourceNotFoundException;
	public ApiResponse childApprovalByDoctor(Long id,Child child)throws Exception;
}
