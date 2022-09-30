package com.example.system.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(value = CustomerNotFoundException.class)
	public ResponseEntity<String> CustomerNotFound(CustomerNotFoundException customer)
	{
		return new ResponseEntity<String>("This Customer does Not Exsits",HttpStatus.CONFLICT);
	}
	@ExceptionHandler(value = SurrenderCylinderNotFoundException.class)
	public ResponseEntity<String> SurrenderCylinderNotFound(SurrenderCylinderNotFoundException surrendercylinder)
	{
		return new ResponseEntity<String>("Surrender Cylinder Not Found",HttpStatus.BAD_REQUEST);
	}

}
