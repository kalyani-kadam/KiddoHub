package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ActivityDTO;
import com.app.service.ActivityService;

@RestController
@RequestMapping("/Activity")
public class ActivityController {
	
	@Autowired
	private ActivityService _activityService;
	
	@GetMapping("/getAllActivityDetails")
	public List<ActivityDTO> getAllActivities() {
		return (_activityService.getAllActivities());
	}

}
