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
import com.app.dto.ChildDTO;
import com.app.dto.ChildDTOCopy;
import com.app.dto.ChildUpdateRegStatusDTO;
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
	}
	

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

	@Override
	public ApiResponse updateChildDetails(Long id,Child child) throws Exception {
		Parent parent =
				parentRepository.findById(child.getParent().getParentId()).orElseThrow(() -> new Exception("Parent not found"));
		System.out.println("in service"+child);
		Child newchild = modelMapper.map(child, Child.class);
		System.out.println("in service after modelmapper"+newchild);
		
		Child existingchild = childRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Child not found!"));		
		existingchild.setParent(parent);
		childRepository.save(existingchild);
		
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
	public ApiResponse updateChildDetails(ChildDTO child) throws Exception {
		if(childRepository.existsById(child.getChildId())) {
			Parent parent =
					parentRepository.findById(child.getParentID()).orElseThrow(() -> new Exception("Parent not found"));
			Child newchild = modelMapper.map(child, Child.class);
			System.out.println("in service after modelmapper"+newchild);
			newchild.setParent(parent);
			childRepository.save(newchild);
			return new ApiResponse("Child details updated successfully!");
		}
		return new ApiResponse("Child details not updated!");
	}
	
	public ApiResponse updateChildStatus(ChildDTO child) throws Exception {
		if(childRepository.existsById(child.getChildId())) {
			Parent parent =
					parentRepository.findById(child.getParentID()).orElseThrow(() -> new Exception("Parent not found"));
			Child newchild = modelMapper.map(child, Child.class);
			System.out.println("in service after modelmapper"+newchild);
			newchild.setParent(parent);
			child.getChildRegStatusEnum().equals(ChildRegStatusEnum.APPROVED);
//			newchild.setChildRegStatusEnum();
			childRepository.save(newchild);
			return new ApiResponse("Child details updated successfully!");
		}
		return new ApiResponse("Child details not updated!");
	}
	
	public void updateRegistrationStatus(int childid)
	{
		childRepository.updateRegStatus(childid);
	
	}
	
	public Child authenticateChild(String emailId, String password) {
		return childRepository.findByEmailIdAndPassword(emailId, password);
//        return childRepository.findByEmailId(emailId)
//                .filter(child -> child.getPassword().equals(password));
    }
    

    public Optional<Child> findChildById(Long id) {
        return childRepository.findById(id);
    }


	@Override
	public ApiResponse updateChildStatus(ChildUpdateRegStatusDTO child) throws Exception {
		if(childRepository.existsById(child.getChildId())) {
			
			Child newchild = modelMapper.map(child, Child.class);
			System.out.println("in service after modelmapper"+newchild);
			
			child.getChildRegStatusEnum().equals(ChildRegStatusEnum.APPROVED);
//			newchild.setChildRegStatusEnum();
			childRepository.save(newchild);
			return new ApiResponse("Child details updated successfully!");
		}
		return new ApiResponse("Child details not updated!");
	}
}
