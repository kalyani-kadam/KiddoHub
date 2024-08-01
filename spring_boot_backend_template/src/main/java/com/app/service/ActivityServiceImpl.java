package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ActivityDTO;
import com.app.repository.ActivityRepository;

@Service
@Transactional
public class ActivityServiceImpl implements ActivityService {

	@Autowired
	private ActivityRepository _activityRepository;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<ActivityDTO> getAllActivities() {
		
		return (_activityRepository.findAll().stream()
				.map(entity -> mapper.map(entity, ActivityDTO.class))
				.collect(Collectors.toList()));
	}

}
