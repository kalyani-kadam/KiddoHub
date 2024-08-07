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
import com.app.entities.Child;
import com.app.service.ChildService;

@CrossOrigin("*")
@RestController
@RequestMapping("/children")

public class ChildController {
	
	@Autowired
	private ChildService childService;
	
	@GetMapping
	List<ChildDTO> getAllChild(){
		System.out.println("in list of all childs");
		List<ChildDTO> test1=childService.getAllChilds();
		//return childService.getAllChilds();
		System.out.println(test1);
		return test1;
	}
	
	@GetMapping("/getAllChildDetails")
	List<Child> getAll(){
		return childService.getAllChild();
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addChild(@RequestBody Child child){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(childService.addChild(child));
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletechild(@PathVariable Long id){
		return ResponseEntity.ok(childService.deleteChildDetails(id));
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updatechild(@PathVariable Long id,@RequestBody ChildDTO childDTO) throws ResourceNotFoundException{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(childService.updateChildDetails(id, childDTO));
//				ok(childService.updateChildDetails(id,childDTO));
	}
	
	@PutMapping("/updatestatus/{id}")
	public ResponseEntity<?> registeredchild(@PathVariable Long id,@RequestBody Child child) throws Exception{
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(childService.childApprovalByDoctor(id, child));
	}
}
