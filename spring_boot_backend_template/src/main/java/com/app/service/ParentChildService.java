package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ParentChildDTO;
import com.app.entities.ParentChildEntity;

public interface ParentChildService {
	List<ParentChildDTO> getAllParentChild();
	public ApiResponse addParentChild(ParentChildEntity parentChildEntity);
}
