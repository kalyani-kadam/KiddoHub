package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DoctorDTO;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
	@Autowired
	private DoctorService doctorService;
	
	@GetMapping
	List<DoctorDTO> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
}
