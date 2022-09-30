package com.example.system.service;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.system.entity.Customer;
import com.example.system.exception.CustomerNotFoundException;
import com.example.system.repository.CustomerRepository;

@Service
public class CustomerService implements CustomerServiceInterface{

	@Autowired
	private CustomerRepository customerrepo;
	@Override
	public String insertCustomer(Customer customer)  {
		// TODO Auto-generated method stub
		 customerrepo.saveAndFlush(customer);
		return "saved";
	}
	
	@Override
	public List<Customer> viewCustomers() {
		// TODO Auto-generated method stub
		List<Customer> customerList = customerrepo.findAll();
		return customerList;
	}
	@Override
	public Optional<Customer> viewCustomer(Integer customerId) {
		// TODO Auto-generated method stub
		Optional<Customer> v = customerrepo.findById(customerId);
		return v;
	}

	@Override
	public Customer updateCustomer(Customer customer) throws CustomerNotFoundException{
		
		int id=1;
			Customer cs = customerrepo.findById(id).
					orElseThrow(()->new CustomerNotFoundException("No Customer found"));
			
			cs.setAccountNo(customer.getAccountNo());
			cs.setIfscNo(customer.getIfscNo());
			cs.setPan(customer.getPan());
			
		return customerrepo.save(cs);
	}

	@Override
	public String deleteCustomerById(Integer customerId) throws CustomerNotFoundException{
		// TODO Auto-generated method stub
		if(customerrepo.existsById(customerId))
		{
			customerrepo.deleteById(customerId);
			return "deleted";
		}
		else
		{
			throw new CustomerNotFoundException();
		}
	}
}
