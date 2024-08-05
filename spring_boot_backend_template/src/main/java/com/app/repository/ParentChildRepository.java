package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ParentChildEntity;

public interface ParentChildRepository extends JpaRepository<ParentChildEntity, Long> {

}
