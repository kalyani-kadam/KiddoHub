package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.DoctorDTO;
import com.app.entities.Child;
import com.app.entities.Doctor;
import com.app.entities.Parent;
import com.app.repository.ChildRepository;
import com.app.repository.DoctorRepository;

@Service
@Transactional

public class DoctorServiceImpl implements DoctorService {
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private ChildRepository childRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<DoctorDTO> getAllDoctors() {		
		return doctorRepository.findAll()
				.stream()
				.map(entity -> modelMapper.map(entity, DoctorDTO.class))
				.collect(Collectors.toList());
	}

	@Override
	public ApiResponse addDoctor(DoctorDTO doctor) throws Exception {
		Child child =
				childRepository.findById(doctor.getChildId()).orElseThrow(() -> new Exception("child not found"));
		System.out.println("in service"+doctor);
		Doctor newdoctor = modelMapper.map(doctor, Doctor.class);
		System.out.println("in service after modelmapper"+newdoctor);
		newdoctor.setChild(child);
		
		doctorRepository.save(newdoctor);
		return new ApiResponse("Addded new Child with ID:"+newdoctor.getDoctorId());	
//		 Doctor newdoctor = doctorRepository.save(doctor);
//		 return new ApiResponse("New doctor added with id:"+newdoctor.getDoctorId());
	}

	@Override
	public ApiResponse deleteDoctorDetails(Long id) throws ResourceNotFoundException {
		if(doctorRepository.existsById(id)) {
			doctorRepository.deleteById(id);
			return new ApiResponse("Doctor details deleted");
		}
		return new ApiResponse("Doctor details not deleted");
	}

//	@Override
//	public ApiResponse updateDoctorDetails(Long id, DoctorDTO doctorDTO) throws ResourceNotFoundException {
//		Doctor checkdoctor = doctorRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Doctor id not found!"));		
//		checkdoctor.setName(doctorDTO.getName());
//		checkdoctor.setPhoneNo(doctorDTO.getPhoneNo());
//		checkdoctor.setSpecialization(doctorDTO.getSpecialization());
//		return new ApiResponse("Doctor details updated");
//	}

}
