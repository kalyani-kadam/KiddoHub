package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.entities.Child;
import com.app.entities.RegisteredChild;
import com.app.repository.RegiSteredChildRepository;

//@Service
@Transactional
public class RegiSteredChildImpl implements RegiSteredChild {
	
	@Autowired
	private RegiSteredChildRepository regiSteredChildRepository;

	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public boolean addChild(Child child) {
		RegisteredChild newchild = modelMapper.map(child, RegisteredChild.class);
		newchild.setChild(child);
		regiSteredChildRepository.save(newchild);
		return true;	
	}
}
