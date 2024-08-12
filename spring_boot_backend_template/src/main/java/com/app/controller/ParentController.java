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
import com.app.dto.ChildDTO;
import com.app.dto.ParentDTO;
import com.app.entities.Parent;
import com.app.service.ParentService;


@RestController
@RequestMapping("/parents")
public class ParentController {

	@Autowired
	private ParentService parentService;
	
	@CrossOrigin("*")
	@GetMapping
	List<ParentDTO> getAllParents(){
		List<ParentDTO> test =parentService.getAllParents();
		System.out.println(test);
		//return parentService.getAllParents();
		return test;
	}
	@CrossOrigin("*")
	@PostMapping("/add")
	public ResponseEntity<?> addParent(@RequestBody ParentDTO parentDTO){
		return ResponseEntity.status(HttpStatus.CREATED).body(parentService.addParent(parentDTO));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateParentDetails(@PathVariable Long id,@RequestBody ParentDTO parentDTO) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(parentService.updateParentDetails(id, parentDTO));
	}
	
	@CrossOrigin("*")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteParentDetails(@PathVariable Long id){
		return ResponseEntity.ok(parentService.deleteParentDetails(id));
	}
	
	@CrossOrigin("*")
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody String emailId,@RequestBody String password) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.OK).body(parentService.login(emailId, password));
	}
}
