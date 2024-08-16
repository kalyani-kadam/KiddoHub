package com.app.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.dto.ChildDTOCopy;
import com.app.dto.ChildUpdateRegStatusDTO;
import com.app.dto.LoginRequest;
import com.app.entities.Child;
import com.app.repository.ParentRepository;
import com.app.service.ChildService;
import com.app.service.EmailService;
import com.app.service.ParentService;

@CrossOrigin("*")
@RestController
@RequestMapping("/children")

public class ChildController {
	
	@Autowired
	private ChildService childService;
	
	@Autowired
    private EmailService emailService;
	
	@Autowired
	private ParentRepository parentRepository;
	@GetMapping
	List<ChildDTOCopy> getAllChild(){
		System.out.println("in list of all childs");
//		List<ChildDTO> test1=childService.getAllChilds();
		return childService.getAllChilds();
//		System.out.println(test1);
//		return test1;
	}
	
	 @PostMapping("/add")
	    public ResponseEntity<?> addChild(@RequestBody ChildDTO child) throws Exception {
	        // Add child to the database
	        ApiResponse savedChild = childService.addChild(child);
	        
	        // After successful registration, send email
//	        String subject = "Welcome to Our Service!";
//	        String text = "Dear " + child.getName() + ",\n\n" +
//	                      "Thank you for registering with us. Your registration is successful.\n\n" +
//	                      "Best regards,\n" +
//	                      "The Team";
//
//	        emailService.sendEmail(child.getEmailId(), subject, text);

	        return ResponseEntity.status(HttpStatus.CREATED)
	                             .body(savedChild);
	    }
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deletechild(@PathVariable Long id){
		return ResponseEntity.ok(childService.deleteChildDetails(id));
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updatechild(@RequestBody ChildDTO child) throws Exception{
		System.out.println("in update "+child);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(childService.updateChildDetails(child));
	}

	
//	child reg status changedd by doctor method
	
	@PutMapping("/updatestatus")
	public ResponseEntity<?> updateregstatus(@RequestBody ChildUpdateRegStatusDTO child) throws Exception{
		System.out.println("child dto with status "+child);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(childService.updateChildStatus(child));
	}
	
	
	@PostMapping("/login")
    public ResponseEntity<Child> login(@RequestBody LoginRequest loginRequest) {
        Child child = childService.authenticateChild(loginRequest.getEmailId(), loginRequest.getPassword());
        if (child != null) {
            return ResponseEntity.ok(child);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Child> getChildById(@PathVariable Long id) {
    	System.out.println("child id in "+id);
        Optional<Child> child = childService.findChildById(id);
        return child.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
