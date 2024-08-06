package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Child;
import com.app.entities.RegisteredChild;
import com.app.repository.RegisteredChildRepository;

@Service
@Transactional
public class RegisteredChildServiceImpl implements RegisteredChildService {
	
	@Autowired
	private RegisteredChildRepository registeredChildRepository;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public boolean addChild(Child child) {
		RegisteredChild newchild = modelMapper.map(child, RegisteredChild.class);
		newchild.setChild(child);
		registeredChildRepository.save(newchild);
		return true;	
	}
}
