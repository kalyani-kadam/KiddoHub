package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.entities.Child;
import com.app.service.ChildService;

@RestController
@RequestMapping("/childs")

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
	
	@GetMapping("/childlist")
	List<Child> getAll(){
		return childService.getAllChild();
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addChild(@RequestBody Child child){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(childService.addChild(child));
	}
}
