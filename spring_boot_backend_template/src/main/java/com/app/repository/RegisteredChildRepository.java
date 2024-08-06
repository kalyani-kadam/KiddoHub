package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.RegisteredChild;


public interface RegisteredChildRepository extends JpaRepository<RegisteredChild, Long> {

}
