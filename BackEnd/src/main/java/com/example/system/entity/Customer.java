package com.example.system.entity;

import javax.persistence.CascadeType;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Range;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	
	@NotNull(message = "Account No cannot be empty")
    private int accountNo;
	
	@NotNull(message = "Enter a valid IFSC NO")
	@Pattern(regexp = "^[A-Z]{4}0[A-Z0-9]{6}$")
	private String ifscNo;
	
	@NotNull(message = "Enter valid pan no.")
	@Pattern(regexp = "[A-Z]{5}[0-9]{4}[A-Z]{1}")
	private String pan;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="b_id")
	private Bank bankID;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="cy_id")
	private Cylinder cylinderId;
	
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public int getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(int accountNo) {
		this.accountNo = accountNo;
	}

	public String getIfscNo() {
		return ifscNo;
	}

	public void setIfscNo(String ifscNo) {
		this.ifscNo = ifscNo;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public Bank getBankID() {
		return bankID;
	}

	public void setBankID(Bank bankID) {
		this.bankID = bankID;
	}
	
	

	public Cylinder getCylinderId() {
		return cylinderId;
	}

	public void setCylinderId(Cylinder cylinderId) {
		this.cylinderId = cylinderId;
	}

	
	
	
	public Customer(int id, int accountNo, String ifscNo, String pan, Bank bankID, Cylinder cylinderId) {
		super();
		Id = id;
		this.accountNo = accountNo;
		this.ifscNo = ifscNo;
		this.pan = pan;
		this.bankID = bankID;
		this.cylinderId = cylinderId;
	}

	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	

	
	

}
