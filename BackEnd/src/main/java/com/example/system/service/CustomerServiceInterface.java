package com.example.system.service;

import java.util.List;
import java.util.Optional;

import com.example.system.entity.Customer;
import com.example.system.exception.CustomerNotFoundException;

public interface CustomerServiceInterface {

	public String insertCustomer(Customer customer);

	public List<Customer> viewCustomers();
	
	public Optional<Customer> viewCustomer(Integer customerId);

	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;

	public String deleteCustomerById(Integer customerId) throws CustomerNotFoundException;

}
