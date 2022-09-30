package com.example.system.service;

import java.util.List;

import com.example.system.entity.Bank;
import com.example.system.entity.Cylinder;

public interface BankServiceInterface {

	public Bank insertBank(Bank bank);
	public Bank updateBank(Bank bank);
	public String deleteBank(Bank bank);
	public List<Bank> viewBank();
}
