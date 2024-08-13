package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Parent;

public interface ParentRepository extends JpaRepository<Parent, Long> {
//	Parent findByEmailIdAndPassword(String emaailId,String password);
	Optional<Parent> findByEmailId(String emailId);
}
