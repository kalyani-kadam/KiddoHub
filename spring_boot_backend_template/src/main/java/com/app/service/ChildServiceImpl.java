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
import com.app.dto.ChildDTOCopy;
import com.app.entities.Child;
import com.app.entities.ChildRegStatusEnum;
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
	public List<ChildDTOCopy> getAllChilds(){
		
		return childRepository.findAll()
				.stream()
				.map(entity -> modelMapper.map(entity, ChildDTOCopy.class))
				.collect(Collectors.toList());	
		
//		List<ChildDTO> childDTOs = childRepository.findAll().stream()
//			    .map(child -> {
//			        ChildDTO dto = modelMapper.map(child, ChildDTO.class);
//			        dto.setParent(child.getParent().getParentId()); // Correct mapping for parentId
//			        return dto;
//			    })
//			    .collect(Collectors.toList());
//		return childDTOs;
//		modelMapper.typeMap(Child.class, ChildDTO.class).addMappings(mapper -> {
//		    mapper.map(src -> src.getParent().getParentId(), ChildDTO::setParentId);
//		});
		
//		List<Child> children = childRepository.findAll();
//		System.out.println("======= child details ======="+children);
//        return children.stream()
//            .map(child -> {
//                ChildDTO dto = modelMapper.map(child, ChildDTO.class);
//                dto.setParentID(child.getParent().getParentId());  // Set parentId correctly
//                System.out.println("dto with fk"+dto);
//                return dto;
//            })
//            .collect(Collectors.toList());
	}
//	@Override
//	public List<ChildDTO> getAllChilds(){
//		List<Child> children = childRepository.findAll();
//		System.out.println("======= child details ======= " + children);
//
//		return children.stream()
//		    .map(child -> {
//		        // Map the Child entity to a ChildDTO using ModelMapper
//		        ChildDTO dto = modelMapper.map(child, ChildDTO.class);
//		        
//		        // Safely set the parentID if the parent is not null
//		        if (child.getParent() != null) {
//		            try {
//		                Long parentId = child.getParent().getParentId();
//		                dto.setParentID(parentId);  // Directly set the parentId
//		            } catch (NumberFormatException e) {
//		                System.err.println("NumberFormatException for parentId: " + e.getMessage());
//		                dto.setParentID(null);  // or handle it according to your use case
//		            }
//		        } else {
//		            dto.setParentID(null);  // Handle the case where parent is null
//		        }
//		        
//		        System.out.println("dto with fk: " + dto);
//		        return dto;
//		    })
//		    .collect(Collectors.toList());  // Collect the DTOs into a list and return
//	}
	
//	public List<ChildDTO> getAllChilds() {
//	    List<Child> children = childRepository.findAll();
//	    return children.stream()
//	        .map(child -> {
//	        	System.out.println("Mapping Child ID: " + child.getChildId() + ", Parent ID: " + child.getParent().getParentId());
//	            ChildDTO dto = new ChildDTO();
//	            dto.setParentID(child.getParent().getParentId());  // Only set parentId
//	            return dto;
//	        })
//	        .collect(Collectors.toList());
//	}

	public List<Child> getAllChild(){
		return childRepository.findAll();
	}
	
	@Override
	public ApiResponse addChild(ChildDTO child) throws Exception {
		Parent parent =
				parentRepository.findById(child.getParentID()).orElseThrow(() -> new Exception("Parent not found"));
		System.out.println("in service"+child);
		Child newchild = modelMapper.map(child, Child.class);
		System.out.println("in service after modelmapper"+newchild);
		newchild.setParent(parent);
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

//	@Override
//	public ApiResponse updateChildDetails(Long id,ChildDTO childdto) throws ResourceNotFoundException {
//		Child existingchild = childRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Child not found!"));		
//		existingchild.setAllergies(childdto.getAllergies());
//		existingchild.setDateOfBirth(childdto.getDateOfBirth());
//		existingchild.setEmergencyContact(childdto.getEmergencyContact());
//		existingchild.setGender(childdto.getGender());
//		existingchild.setName(childdto.getName());
//		existingchild.setMedicalInfo(childdto.getMedicalInfo());		
//		return new ApiResponse("Child details updated successfully!");
//	}

	@Override
	public ApiResponse updateChildDetails(Long id,Child child) throws Exception {
		Parent parent =
				parentRepository.findById(child.getParent().getParentId()).orElseThrow(() -> new Exception("Parent not found"));
		System.out.println("in service"+child);
		Child newchild = modelMapper.map(child, Child.class);
		System.out.println("in service after modelmapper"+newchild);
		newchild.setParent(parent);
		childRepository.save(newchild);
		Child existingchild = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not found!"));		
		existingchild.setAllergies(child.getAllergies());
		existingchild.setDateOfBirth(child.getDateOfBirth());
		existingchild.setEmergencyContact(child.getEmergencyContact());
		existingchild.setGender(child.getGender());
		existingchild.setName(child.getName());
		existingchild.setMedicalInfo(child.getMedicalInfo());
		
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

	@Override
	public ApiResponse findById(Long id) throws Exception {
		if(childRepository.existsById(id)) {
			childRepository.findById(id);
			return new ApiResponse("child found");
		}
		return new ApiResponse("child not found");
	}

	@Override
	public ApiResponse updateChildDetails(Child child) throws Exception {
		System.out.println("in service ========= "+child);
		if(childRepository.existsById(child.getChildId())) {
			Parent parent =
					parentRepository.findById(child.getParent().getParentId()).orElseThrow(() -> new Exception("Parent not found"));
			System.out.println("in service"+child);
			Child newchild = modelMapper.map(child, Child.class);
			System.out.println("in service after modelmapper"+newchild);
			newchild.setParent(parent);
			childRepository.save(child);
			return new ApiResponse("Child details updated successfully!");
		}
		return new ApiResponse("Child details not updated!");
	}
}
