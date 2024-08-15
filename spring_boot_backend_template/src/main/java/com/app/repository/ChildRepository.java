package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Child;

public interface ChildRepository extends JpaRepository<Child, Long> {
	@Modifying
	@Query(value="update children set childRegStatusEnum = \"APPROVED\" where child_id =:child_id ",nativeQuery = true)
	void updateRegStatus(@Param("child_id") int child_id);
}
