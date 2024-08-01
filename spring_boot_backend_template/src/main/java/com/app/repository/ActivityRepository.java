package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long> {

}
