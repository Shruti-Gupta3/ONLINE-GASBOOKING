package com.example.system.controller;

import javax.validation.Valid;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.system.entity.Cylinder;
import com.example.system.service.CylinderServiceInterface;

import java.util.List;;

@RestController
@CrossOrigin("*")
public class CylinderController {

	@Autowired
	private CylinderServiceInterface csiserv;
	
	@PostMapping("/cylindersave")
	public ResponseEntity<String> insertCylinder(@RequestBody @Valid Cylinder cylinder)
	{
		csiserv.insertCylinder(cylinder);
		return new ResponseEntity<String>("Cylinder is Booked", HttpStatus.CREATED);
	}
	
	@PutMapping("/cylinderupdate")
	public String updateCylinder(@RequestBody Cylinder cylinder)
	{
		csiserv.updateCylinder(cylinder);
		return "Updated";
	}
	
//	@DeleteMapping("/cylinderdeletebyId/{id}")
//	public String deleteCylinder(@PathVariable int cylinderId) 
//	{
//		csiserv.deleteCylinder(cylinderId);
//		return "Deleted";
//	}
	@GetMapping("/cylinders") 
	public List<Cylinder> viewCylindersByType()
	{
		List<Cylinder> c=csiserv.viewCylinders();
		return c;
	}
}
