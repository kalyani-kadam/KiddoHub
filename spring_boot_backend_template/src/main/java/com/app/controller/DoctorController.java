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
import com.app.dto.DoctorDTO;
import com.app.entities.Doctor;
import com.app.service.DoctorService;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("/getAllDoctorDetails")
	List<DoctorDTO> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addDoctor(@RequestBody Doctor doctor){
		return ResponseEntity.ok(doctorService.addDoctor(doctor));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateDoctorDetails(@PathVariable Long id,@RequestBody DoctorDTO doctorDTO) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(doctorService.updateDoctorDetails(id, doctorDTO));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteDoctorDetails(@PathVariable Long id) throws ResourceNotFoundException{
		return ResponseEntity.ok(doctorService.deleteDoctorDetails(id));
	}
}
