package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.dto.StaffDTO;
import com.app.entities.Child;
import com.app.entities.Parent;
import com.app.entities.Staff;
import com.app.repository.StaffRepository;

@Service
@Transactional
public class StaffServiceImpl  implements StaffService{

	@Autowired
	private StaffRepository _staffRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<Staff> getAllStaff() {
		
		return (_staffRepository.findAll());
	}

	@Override
	public ApiResponse addStaff(Staff staff) {
		_staffRepository.save(staff);
		return new ApiResponse("Addded new Staff with ID:"+staff.getStaffId());
	}

	@Override
	public ApiResponse updateStaffDetails(StaffDTO staffDTO) throws ResourceNotFoundException {
//		Staff existingStaff = _staffRepository.findById(id)
//					.orElseThrow(()-> new ResourceNotFoundException("Staff Not Found!"));
//		
//		existingStaff.setAddress(staffDTO.getAddress());
//		existingStaff.setEmail(staffDTO.getEmail());
//		existingStaff.setJoiningDate(staffDTO.getJoiningDate());
//		existingStaff.setMobNo(staffDTO.getMobNo());
//		existingStaff.setName(staffDTO.getName());
//		existingStaff.setPost(staffDTO.getPost());
//		
//		return new ApiResponse("Staff Details Updated Successfully! [id] :"+existingStaff.getStaffId());
		
		if(_staffRepository.existsById(staffDTO.getStaffId())) {
			Staff newStaff = modelMapper.map(staffDTO, Staff.class);
			_staffRepository.save(newStaff);
			return new ApiResponse("Staff details updated successfully!");
		}
		return new ApiResponse("Staff details updated Unsuccessful!");
	}
	

	@Override
	public ApiResponse deleteStaffDetails(Long id) {
		if(_staffRepository.existsById(id)) {
			_staffRepository.deleteById(id);
			return new ApiResponse("Staff Deleted Successfully! [id] : "+id);
		}
		return new ApiResponse("Staff Not Found! [id] : "+id);
	}
	
	
}
