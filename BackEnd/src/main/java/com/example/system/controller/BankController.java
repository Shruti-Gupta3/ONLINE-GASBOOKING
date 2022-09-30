package com.example.system.controller;

import java.util.List;

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

import com.example.system.entity.Bank;
import com.example.system.entity.Cylinder;
import com.example.system.service.BankServiceInterface;

@RestController
@CrossOrigin("http://localhost:3000")
public class BankController {
	
	@Autowired
	private BankServiceInterface bankserv;
	
	@PostMapping("/banksave")
	public ResponseEntity<String> insertBank(@RequestBody @Valid Bank bank)
	{
		bankserv.insertBank(bank);
		return new ResponseEntity<String>("Bank details are saved", HttpStatus.CREATED);
	}
	
	@PutMapping("/bankupdate")
	public String updateBank(@RequestBody Bank bank)
	{
		bankserv.updateBank(bank);
		return "Updated";
	}
	
	@DeleteMapping("/bankdelete")
	public String deleteBank(@PathVariable Bank bank)
	{
		bankserv.deleteBank(bank);
		return "Deleted";
	}
	@GetMapping("/banks") 
	public List<Bank> viewBank()
	{
		List<Bank> c=bankserv.viewBank();
		return c;
	}
}
