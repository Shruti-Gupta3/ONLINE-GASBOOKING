//package com.example.system;
//
//import static org.junit.Assert.assertEquals;
//import static org.mockito.Mockito.when;
//
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import com.example.system.entity.Bank;
//import com.example.system.entity.Customer;
//import com.example.system.entity.Cylinder;
//import com.example.system.repository.CustomerRepository;
//import com.example.system.service.CustomerService;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(classes= {ServiceMockitoTests.class})
//public class ServiceMockitoTests {
//
//	@MockBean
//	CustomerRepository customerrepository;
//	
//	@Autowired
//	CustomerService customerservice;
//	
//	Bank bank=new Bank(1,"SBI","Milan Vihar");
//	Cylinder cylinder=new Cylinder(1,"Indian",23,"blue",321);
//	Customer customer=new Customer(1,2314,"ASDF0876543","DFHJT8888S",bank,cylinder);
//	
//	@Test
//	public void insertCustomerTest()
//	{
//		when(customerrepository.save(customer)).thenReturn(customer);
//		assertEquals(customer,customerservice.insertCustomer(customer));
//	}
//	
//	
//}