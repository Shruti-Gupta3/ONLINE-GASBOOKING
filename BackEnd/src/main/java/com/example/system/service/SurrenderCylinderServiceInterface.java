package com.example.system.service;

import com.example.system.entity.SurrenderCylinder;
import com.example.system.exception.SurrenderCylinderNotFoundException;

public interface SurrenderCylinderServiceInterface {
//
	public SurrenderCylinder insertSurrenderCylinder(SurrenderCylinder surrenderCylinder) throws SurrenderCylinderNotFoundException;
	public SurrenderCylinder updateSurrenderCylinder(SurrenderCylinder surrenderCylinder)throws SurrenderCylinderNotFoundException;
	public SurrenderCylinder deleteSurrenderCylinder(int surrenderCylinderId);
	public int countSurrenderedCylinders();
}
