package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ActivityDTO;
import com.app.dto.ActivityDTOCopy;
import com.app.dto.ApiResponse;


public interface ActivityService {
	
	List<ActivityDTOCopy> getAllActivities();
	
	ApiResponse addActivity(ActivityDTO activity) throws Exception;
	
	ApiResponse updateActivityDetails(Long id,ActivityDTO activityDTO) throws ResourceNotFoundException;
	
	//ApiResponse updateActivityDetails(Long id,Activity activity) throws ResourceNotFoundException;
	
	ApiResponse deleteActivity(Long id);

}
