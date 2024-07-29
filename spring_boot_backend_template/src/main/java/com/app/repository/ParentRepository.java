package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Parent;

public interface ParentRepository extends JpaRepository<Parent, Long> {

}
