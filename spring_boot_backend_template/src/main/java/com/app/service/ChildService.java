package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.dto.ChildDTOCopy;
import com.app.entities.Child;

public interface ChildService {
	//List<ChildDTO> getAll();

	List<ChildDTOCopy> getAllChilds();
	public List<Child> getAllChild();
	
	public ApiResponse addChild(ChildDTO child)throws Exception;
	public ApiResponse deleteChildDetails(Long id);
//	public ApiResponse updateChildDetails(Long id,ChildDTO childdto)throws ResourceNotFoundException;
	public ApiResponse updateChildDetails(Long id,Child child) throws Exception ;
	public ApiResponse updateChildDetails(ChildDTO child)throws Exception;
	public ApiResponse childApprovalByDoctor(Long id,Child child)throws Exception;
	public ApiResponse findById(Long id)throws Exception;
	public void updateRegistrationStatus(int id);
	public ApiResponse updateChildStatus(ChildDTO child)throws Exception;
	public Child authenticateChild(String emailId, String password);
	public Optional<Child> getChildById(Long id);
	 public Optional<Child> findChildById(Long id);
	
}
