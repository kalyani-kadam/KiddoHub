package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ChildDTO;
import com.app.service.ChildService;

@RestController
@RequestMapping("/childs")

public class ChildController {
	
	@Autowired
	private ChildService childService;
	
	@GetMapping
	List<ChildDTO> getAllChild(){
		System.out.println("in list of all childs");
		return childService.getAllChilds();
	}
}
