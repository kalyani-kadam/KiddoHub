package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.StaffDTO;
import com.app.entities.Staff;

public interface StaffService {
	
	List<Staff> getAllStaff();
	
	ApiResponse addStaff(Staff staff);
	
	ApiResponse updateStaffDetails(StaffDTO staffDTO) throws ResourceNotFoundException;
	
	ApiResponse deleteStaffDetails(Long id);

}
