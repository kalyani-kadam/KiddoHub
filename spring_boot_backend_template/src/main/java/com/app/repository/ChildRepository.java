package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Child;

public interface ChildRepository extends JpaRepository<Child, Long> {

}
