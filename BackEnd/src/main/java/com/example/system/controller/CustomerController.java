package com.example.system.controller;

import java.util.List;


import java.util.Optional;

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

import com.example.system.entity.Customer;
import com.example.system.exception.CustomerNotFoundException;
import com.example.system.service.CustomerServiceInterface;
@RestController
@CrossOrigin("*")
public class CustomerController {
	@Autowired
	private CustomerServiceInterface icserv;
	
	@PostMapping("/customersave")
	public String insertCustomer(@RequestBody @Valid Customer customer)
	{
		System.out.println(customer);
		icserv.insertCustomer(customer);
		return "saved";
		
	}


	@GetMapping("/customer")
	public List<Customer>viewCustomers()
	{
		System.out.println("Request received ");
		List<Customer> customerList = icserv.viewCustomers();
		return customerList;
	}
	
	@GetMapping("/customers/{id}") 
	public Optional<Customer> viewCustomer(@PathVariable Integer customerId)
	{
		Optional<Customer> c=icserv.viewCustomer(customerId);
		return c;
	}
	@PutMapping("/customer")
	public String updateCustomer(@RequestBody Customer customer) throws CustomerNotFoundException
	{
		icserv.updateCustomer(customer);
		return "Updated";
	}
	@DeleteMapping("/customerdeletebyId/{Id}")
	public String deleteCustomerById(@PathVariable Integer Id) throws CustomerNotFoundException
	{
		icserv.deleteCustomerById(Id);
		return "Deleted";
	}
}
