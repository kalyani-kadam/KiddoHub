package com.app.repository;

import java.util.Optional;
import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Child;
import com.app.entities.ChildRegStatusEnum;

public interface ChildRepository extends JpaRepository<Child, Long> {

	Optional<Child> findByEmailId(String emailId);
	Child findByEmailIdAndPassword(String emailId, String password);
	
	@Modifying
	@Transactional
	@Query("UPDATE Child c SET c.childRegStatusEnum = :status WHERE c.childId = :childId")
	int updateChildRegStatus(@Param("status") ChildRegStatusEnum status, @Param("childId") Long childId);

}
