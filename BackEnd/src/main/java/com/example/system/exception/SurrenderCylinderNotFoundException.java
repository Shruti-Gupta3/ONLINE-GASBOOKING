package com.example.system.exception;

public class SurrenderCylinderNotFoundException extends Exception{

	private String msg;
	public SurrenderCylinderNotFoundException() {
		super();
	}

	public SurrenderCylinderNotFoundException(String msg) {
		super();
		this.msg=msg;
		
	}

	
	
}
