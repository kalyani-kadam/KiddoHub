package com.app.service;

import java.util.List;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.DoctorDTO;
import com.app.entities.Doctor;

public interface DoctorService {
	List<DoctorDTO> getAllDoctors();
	public ApiResponse addDoctor(DoctorDTO doctor)throws Exception;
	public ApiResponse deleteDoctorDetails(Long id)throws ResourceNotFoundException;
//	public ApiResponse updateDoctorDetails(Long id,DoctorDTO doctorDTO)throws ResourceNotFoundException;
}
