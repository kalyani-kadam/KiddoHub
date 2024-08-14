package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ChildDTO;
import com.app.entities.Child;
import com.app.entities.ChildRegStatusEnum;
import com.app.entities.GenderEnum;
import com.app.entities.Parent;
import com.app.repository.ChildRepository;
import com.app.repository.DoctorRepository;
import com.app.repository.ParentRepository;



@Transactional
@Service
public class ChildServiceImpl implements ChildService {

	@Autowired
	private ChildRepository childRepository;
	
	@Autowired
	private ParentRepository parentRepository;
	
	@Autowired 
	private ModelMapper modelMapper;
	
	@Autowired 
	private DoctorRepository doctorRepository;
	
	@Autowired
	private RegisteredChildService registeredChildService;
	
	@Override
	public List<ChildDTO> getAllChilds(){
		return childRepository.findAll()
				.stream()
				.map(entity -> modelMapper.map(entity, ChildDTO.class))
				.collect(Collectors.toList());		
	}
		
	public List<Child> getAllChild(){
		return childRepository.findAll();
	}
	
	@Override
	public ApiResponse addChild(Child child) throws Exception {
//		child.gen
//		GenderEnum gender = GenderEnum.valueOf(child.getGender());
//		Parent parent =
//				parentRepository.findById(child.getParent().getParentId()).orElseThrow(() -> new Exception("Parent not found"));
//		if (parentRepository.existsById(child.getParent().getParentId())) {
//		if(parent != null) {
//             Child newchild = childRepository.save(child);
//             return new ApiResponse("Child added with Id "+newchild.getChildId());
//        }
//             else {
//            throw new RuntimeException("Parent with ID " + child.getParent().getParentId() + " does not exist");
//        	return new ApiResponse("Parent with ID " + child.getParent().getParentId() + " does not exist");
//        }
		Child newchild = modelMapper.map(child, Child.class);
		childRepository.save(newchild);
		return new ApiResponse("Addded new Child with ID:"+newchild.getChildId());	
	}
	
	@Override
	public ApiResponse deleteChildDetails(Long id) {
		if(childRepository.existsById(id)){
			childRepository.deleteById(id);
			return new ApiResponse("child deleted");
		}
		return new ApiResponse("child deletion failed");
	}

	@Override
	public ApiResponse updateChildDetails(Long id,ChildDTO childdto) throws ResourceNotFoundException {
		Child existingchild = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not found!"));		
		existingchild.setAllergies(childdto.getAllergies());
		existingchild.setDateOfBirth(childdto.getDateOfBirth());
		existingchild.setEmergencyContact(childdto.getEmergencyContact());
		existingchild.setGender(childdto.getGender());
		existingchild.setName(childdto.getName());
		existingchild.setMedicalInfo(childdto.getMedicalInfo());		
		return new ApiResponse("Child details updated successfully!");
	}

	@Override
	public ApiResponse childApprovalByDoctor(Long id, Child child) throws Exception {
		Child checkchild = childRepository.findById(id).orElseThrow(()->new Exception("Sorry!! Child id not exists!"));
		checkchild.setChildRegStatusEnum(child.getChildRegStatusEnum());
//		System.out.println("______+++++++++++++++++++++++___________"+child.getChildRegStatusEnum());
//		checkchild.getChildRegStatusEnum().equals(checkchild);
		if(checkchild.getChildRegStatusEnum().equals(ChildRegStatusEnum.APPROVED)) {
			registeredChildService.addChild(checkchild);
			return new ApiResponse("Child regestration Successful!!");
		}
		return new ApiResponse("Child registration rejected!!");
	}
}
