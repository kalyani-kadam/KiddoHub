package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Staff;
import com.app.repository.StaffRepository;

@Service
@Transactional
public class StaffServiceImpl  implements StaffService{

	@Autowired
	private StaffRepository _staffRepository;
	
	@Override
	public List<Staff> getAllStaff() {
		
		return (_staffRepository.findAll());
	}

}
