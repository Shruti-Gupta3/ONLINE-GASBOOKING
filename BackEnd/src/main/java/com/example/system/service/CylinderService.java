package com.example.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.system.entity.Cylinder;
import com.example.system.repository.CylinderRepository;
@Service
public class CylinderService implements CylinderServiceInterface{
	
	@Autowired
	private CylinderRepository cylinderrepo;

	@Override
	public Cylinder insertCylinder(Cylinder cylinder) {
		// TODO Auto-generated method stub
		return cylinderrepo.save(cylinder);
	}

	@Override
	public Cylinder updateCylinder(Cylinder cylinder) {
		// TODO Auto-generated method stub
		return cylinderrepo.save(cylinder);
	}

//	@Override
//	public Cylinder deleteCylinder(int cylinderId) {
//		// TODO Auto-generated method stub
//		return cylinderrepo.deleteById(cylinderId);
//	}
//
	@Override
	public List<Cylinder> viewCylinders() {
		// TODO Auto-generated method stub
		List<Cylinder> cl=cylinderrepo.findAll();
				return cl;
	}
}
