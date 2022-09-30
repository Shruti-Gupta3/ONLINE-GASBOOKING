package com.example.system.service;

import java.util.List;

import com.example.system.entity.Cylinder;

public interface CylinderServiceInterface {

	public Cylinder insertCylinder(Cylinder cylinder);
	public Cylinder updateCylinder(Cylinder cylinder);
	//public Cylinder deleteCylinder(int cylinderId);
	public List<Cylinder> viewCylinders();
}

	
