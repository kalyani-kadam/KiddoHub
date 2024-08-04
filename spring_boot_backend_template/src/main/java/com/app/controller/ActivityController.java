package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ActivityDTO;
import com.app.dto.StaffDTO;
import com.app.entities.Activity;
import com.app.service.ActivityService;

@RestController
@RequestMapping("/activity")
public class ActivityController {
	
	@Autowired
	private ActivityService _activityService;
	
	@GetMapping("/getAllActivityDetails")
	public List<ActivityDTO> getAllActivities() {
		return (_activityService.getAllActivities());
	}

	
	@PostMapping("/add")
	public ResponseEntity<?> addActivity(@RequestBody Activity activity){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(_activityService.addActivity(activity));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateActivity(@PathVariable Long id, @RequestBody ActivityDTO activityDTO) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(_activityService.updateActivityDetails(id, activityDTO));
	}

//	@PutMapping("/update/{id}")
//	public ResponseEntity<?> updateActivity(@PathVariable Long id, @RequestBody Activity activity) throws ResourceNotFoundException{
//		return ResponseEntity.status(HttpStatus.ACCEPTED).body(_activityService.updateActivityDetails(id, activity));
//	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteActivity(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(_activityService.deleteActivity(id));
	}
	
}
