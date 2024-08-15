package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ParentDTO;
import com.app.entities.Parent;
import com.app.repository.ParentRepository;

@Service
@Transactional
public class ParentServiceImpl implements ParentService {

	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
//	@Autowired
//    private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public List<ParentDTO> getAllParents() {
		
		return parentRepository.findAll()
				.stream()
				.map(entiry -> modelMapper.map(entiry, ParentDTO.class)).collect(Collectors.toList());
	}
	@Override
	public ApiResponse addParent(ParentDTO parentDTO) {
		Parent newparent = modelMapper.map(parentDTO, Parent.class);
		parentRepository.save(newparent);
		return new ApiResponse("Addded new parent with ID:"+newparent.getParentId());	
	}
	@Override
	public ApiResponse deleteParentDetails(Long id) {
		if(parentRepository.existsById(id)){
			parentRepository.deleteById(id);
			return new ApiResponse("parent deleted");
		}
		return new ApiResponse("parent deletion failed");
	}
	@Override
	public ApiResponse updateParentDetails(Long id, ParentDTO parentdto) throws ResourceNotFoundException {
		Parent existingParent = parentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Parent with this id is not found"));
		
		existingParent.setAddress(parentdto.getAddress());
		existingParent.setEmailId(parentdto.getEmailId());
		existingParent.setName(parentdto.getName());
		existingParent.setPhoneNo(parentdto.getPhoneNo());
		
		return new ApiResponse("Parents details updated successfully");
	}
	
//	@Override
//	public ApiResponse login(String emailId, String password) throws ResourceNotFoundException {
//		Parent p = parentRepository.findByEmailIdAndPassword(emailId, password);
//		if(p != null)
//			return new ApiResponse("Parent found");
//		return new ApiResponse("Parent not found");
//	}

	@Override
	public boolean login(String emailId, String password) throws ResourceNotFoundException {
        Optional<Parent> parentOpt = parentRepository.findByEmailId(emailId);
        
        if (parentOpt.isPresent()) {
            Parent parent = parentOpt.get();
//            if (parent != null && passwordEncoder.matches(password, parent.getPassword())) {
//                return true;
//            }
            if (parent.getPassword().compareTo(password)==0) {
//                return parent;
            	System.out.println("in if");
            	return true;
            } else {
            	System.out.println("in inner else");
//                throw new Exception("Invalid Password");
            	return false;
            }
        } else {
        	System.out.println("in outer else");
//            throw new Exception("Parent not found with emailId: " + emailId);
        	return false;
        }
    }
}
