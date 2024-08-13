package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ParentDTO;
import com.app.entities.Parent;

public interface ParentService {
	List<ParentDTO> getAllParents();
	public ApiResponse addParent(ParentDTO parentDTO);
	public ApiResponse deleteParentDetails(Long id);
	public ApiResponse updateParentDetails(Long id,ParentDTO Parentdto)throws ResourceNotFoundException;
	public boolean login(String emailId,String password)throws ResourceNotFoundException;
}
