package com.example.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.system.entity.Cylinder;

@Repository
public interface CylinderRepository extends JpaRepository<Cylinder, Integer>{
	
	

}
