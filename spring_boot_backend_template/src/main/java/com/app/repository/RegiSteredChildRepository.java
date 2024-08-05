package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.RegisteredChild;
import com.app.service.RegiSteredChild;

public interface RegiSteredChildRepository extends JpaRepository<RegisteredChild, Long> {

}
