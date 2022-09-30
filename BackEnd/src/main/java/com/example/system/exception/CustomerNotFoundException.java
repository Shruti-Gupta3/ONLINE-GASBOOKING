package com.example.system.exception;

public class CustomerNotFoundException extends Exception{

	/**
	 * 
	 */
	//private static final long serialVersionUID = 1L;
	private String msg;
	
	public CustomerNotFoundException() {
		super();
	
	}

	public CustomerNotFoundException(String msg) {
		super();
		this.msg=msg;
		
	}
	
}
