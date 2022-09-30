package com.example.system.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
@Entity
public class Bank {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bankId;
	
	@NotNull(message="Bank name should not be null")
	//@Size(min=2 , max=30)
	private String bankName;
	
	@NotNull(message="Bank address should not be null")
	private String address;
	
	public int getBankId() {
		return bankId;
	}
	public void setBankId(int bankId) {
		this.bankId = bankId;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Bank(int bankId, String bankName, String address) {
		super();
		this.bankId = bankId;
		this.bankName = bankName;
		this.address = address;
	}
	public Bank() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
