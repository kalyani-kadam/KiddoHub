package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.ParentChildEntity;
import com.app.service.ParentChildService;

@CrossOrigin("*")
@RestController
@RequestMapping("/parentchild")
public class ParentChildController {

	@Autowired
	private ParentChildService parentChildService;
	
	@GetMapping
	public ResponseEntity<?> getAllDetails(){
		return ResponseEntity.ok(parentChildService.getAllParentChild());
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addParentChild(@RequestBody ParentChildEntity parentChildEntity){
		return ResponseEntity.status(HttpStatus.CREATED).body(parentChildService.addParentChild(parentChildEntity));
	}
}