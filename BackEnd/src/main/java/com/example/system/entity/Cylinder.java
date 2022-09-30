package com.example.system.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;

@Entity
public class Cylinder {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cylinderId;
	
	@NotNull(message = "Type should not be empty")
	private String type;
	
	@NotNull(message = "Should not be empty")
	@Digits( fraction = 2, integer = 2)
	private float weight;
	
	@NotNull(message = "Strap should have a color")
	private String strapColor;
	
	@NotNull(message = "Amount should be valid")
	@Digits( fraction = 2, integer = 3)
	private float price;
	
	
	public int getCylinderId() {
		return cylinderId;
	}
	public void setCylinderId(int cylinderId) {
		this.cylinderId = cylinderId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public String getStrapColor() {
		return strapColor;
	}
	public void setStrapColor(String strapColor) {
		this.strapColor = strapColor;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
	
	public Cylinder(int cylinderId, String type, float weight, String strapColor, float price) {
		super();
		this.cylinderId = cylinderId;
		this.type = type;
		this.weight = weight;
		this.strapColor = strapColor;
		this.price = price;
	}
	public Cylinder() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
