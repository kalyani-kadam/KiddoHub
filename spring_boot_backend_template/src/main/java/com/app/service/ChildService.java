package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.entities.Child;

public interface ChildService {
	//List<ChildDTO> getAll();

	List<ChildDTO> getAllChilds();
	public List<Child> getAllChild();
	
	public ApiResponse addChild(Child child);
}
