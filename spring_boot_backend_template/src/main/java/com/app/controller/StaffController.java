package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.StaffDTO;
import com.app.entities.Staff;
import com.app.service.StaffService;

@CrossOrigin("*")
@RestController
@RequestMapping("/staff")
public class StaffController {

	@Autowired
	private StaffService _staffService;
	

	@GetMapping
	public List<Staff> getAllStaff() {
		
		return (_staffService.getAllStaff());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addStaff(@RequestBody Staff staff){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(_staffService.addStaff(staff));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateStaff( @RequestBody StaffDTO staffdto) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(_staffService.updateStaffDetails(staffdto));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteStaff(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(_staffService.deleteStaffDetails(id));
	}
}
