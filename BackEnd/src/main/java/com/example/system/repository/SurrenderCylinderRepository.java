package com.example.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.system.entity.SurrenderCylinder;

@Repository
public interface SurrenderCylinderRepository extends JpaRepository<SurrenderCylinder, Integer>{

}
