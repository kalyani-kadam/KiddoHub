package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Staff;
import com.app.service.StaffService;

@CrossOrigin("*")
@RestController
@RequestMapping("/staff")
public class StaffController {

	@Autowired
	private StaffService _staffService;
	

	@GetMapping("getAllStaffDetails")
	public List<Staff> getAllStaff() {
		
		return (_staffService.getAllStaff());
	}
}
