package com.example.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.system.entity.Bank;
import com.example.system.entity.Cylinder;
import com.example.system.repository.BankRepository;

@Service
public class BankService implements BankServiceInterface{

	@Autowired
	private BankRepository bankrepo;
	
	@Override
	public Bank insertBank(Bank bank) {
		// TODO Auto-generated method stub
		return bankrepo.save(bank);
	}

	@Override
	public Bank updateBank(Bank bank) {
		// TODO Auto-generated method stub
		return bankrepo.save(bank);
	}

	@Override
	public String deleteBank(Bank bank) {
		// TODO Auto-generated method stub
		bankrepo.delete(bank);
		return "Deleted";
	}
	
	@Override
	public List<Bank> viewBank() {
		// TODO Auto-generated method stub
		List<Bank> cl=bankrepo.findAll();
				return cl;
	}

}
