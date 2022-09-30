package com.example.system.entity;

import java.time.LocalDate;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class SurrenderCylinder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int surrenderId;
	
	private LocalDate surrenderDate;
	
	
	@JsonIgnore
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="Id")
	private Customer customer;
	
	@JsonIgnore
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="cy_id")
	private Cylinder cylinder;
	
	
	public int getSurrenderId() {
		return surrenderId;
	}
	public void setSurrenderId(int surrenderId) {
		this.surrenderId = surrenderId;
	}
	public LocalDate getSurrenderDate() {
		return surrenderDate;
	}
	public void setSurrenderDate(LocalDate surrenderDate) {
		this.surrenderDate = surrenderDate;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public Cylinder getCylinder() {
		return cylinder;
	}
	public void setCylinder(Cylinder cylinder) {
		this.cylinder = cylinder;
	}
	
	public SurrenderCylinder(int surrenderId, LocalDate surrenderDate, Customer customer, Cylinder cylinder) {
		super();
		this.surrenderId = surrenderId;
		this.surrenderDate = surrenderDate;
		this.customer = customer;
		this.cylinder = cylinder;
	}
	public SurrenderCylinder() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
