package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ParentDTO;
import com.app.service.ParentService;

@RestController
@RequestMapping("/parents")
public class ParentController {

	@Autowired
	private ParentService parentService;
	
	@GetMapping
	List<ParentDTO> getAllParents(){
		return parentService.getAllParents();
	}
}
