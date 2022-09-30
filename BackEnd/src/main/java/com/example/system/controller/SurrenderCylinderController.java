package com.example.system.controller;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.system.entity.SurrenderCylinder;
import com.example.system.exception.SurrenderCylinderNotFoundException;
import com.example.system.service.SurrenderCylinderService;
@RestController
@CrossOrigin("http://localhost:3000")
public class SurrenderCylinderController {
	
	@Autowired
	private SurrenderCylinderService scyserv;
	
	@PostMapping("/surrenderCylindersave")
	public ResponseEntity<String> insertSurrenderCylinder( @Valid @RequestBody SurrenderCylinder sc)throws SurrenderCylinderNotFoundException
	{
		scyserv.insertSurrenderCylinder(sc);
		return new ResponseEntity<String>("Customer is saved", HttpStatus.CREATED);
	}
	
	@PutMapping("/surrenderUpdate")
	public String updateSurrenderCylinder(@RequestBody SurrenderCylinder sc) throws SurrenderCylinderNotFoundException
	{
		scyserv.updateSurrenderCylinder(sc);
		return "Updated";
	}
	
	@DeleteMapping("/surrendercylinderdelete")
	public String deleteSurrenderCylinder(@PathVariable int sc)
	{
		scyserv.deleteSurrenderCylinder(sc);
		return "Deleted";
	}
	
	@GetMapping("/count")
	public int countSurrenderedCylinders(@PathVariable SurrenderCylinder sc)
	{
		return scyserv.countSurrenderedCylinders();
	}

}
