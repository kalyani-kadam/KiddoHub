package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ActivityDTO;
import com.app.dto.ActivityDTOCopy;
import com.app.dto.ApiResponse;
import com.app.entities.Activity;
import com.app.entities.Staff;
import com.app.repository.ActivityRepository;
import com.app.repository.StaffRepository;

@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {

	@Autowired
	private ActivityRepository _activityRepository;
	
	@Autowired
	private StaffRepository _staffRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<ActivityDTOCopy> getAllActivities() {
		
		return (_activityRepository.findAll().stream()
				.map(entity -> mapper.map(entity, ActivityDTOCopy.class))
				.collect(Collectors.toList()));
	}

	@Override
	public ApiResponse addActivity(ActivityDTO activity) throws Exception {
		
		Staff staff = _staffRepository.findById(activity.getStaffId()).orElseThrow(()-> new Exception("staff Not Found"));
		Activity newActivity = mapper.map(activity, Activity.class);
		System.out.println("in service after modelmapper"+newActivity);
		newActivity.setStaffId(staff);
		_activityRepository.save(newActivity);
		return new ApiResponse("New Activity Added Successfully!");
	}

	@Override
	public ApiResponse updateActivityDetails(Long id, ActivityDTO activityDTO) throws ResourceNotFoundException {
		Activity existingActivity = _activityRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Activity Not Found!"));
		
		existingActivity.setAgeGroup(activityDTO.getAgeGroup());
		existingActivity.setDescription(activityDTO.getDescription());
		existingActivity.setName(activityDTO.getName());
		existingActivity.setNo_childs(activityDTO.getNo_childs());
		existingActivity.setSchedule(activityDTO.getSchedule());
		
		
		return new ApiResponse("Activity Details Updated Successfully! [id] :"+existingActivity.getActivityId());
	}
	
//	@Override
//	public ApiResponse updateActivityDetails(Long id, Activity activity) throws ResourceNotFoundException {
//		Activity existingActivity = _activityRepository.findById(id)
//				.orElseThrow(()-> new ResourceNotFoundException("Activity Not Found!"));
//		
//		existingActivity.setAgeGroup(activity.getAgeGroup());
//		existingActivity.setDescription(activity.getDescription());
//		existingActivity.setName(activity.getName());
//		existingActivity.setNo_childs(activity.getNo_childs());
//		existingActivity.setSchedule(activity.getSchedule());
//		
//		return new ApiResponse("Activity Details Updated Successfully! [id] :"+existingActivity.getActivityId());
//	}

	@Override
	public ApiResponse deleteActivity(Long id) {
		if(_activityRepository.existsById(id)) {
			_activityRepository.deleteById(id);
			return new ApiResponse("Activity Deleted Successfully! [id] : "+id);
		}
		return new ApiResponse("Activity Not Found! [id] : "+id);
	}


}
