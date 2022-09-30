package com.example.system.service;

import java.time.LocalDate;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.system.entity.SurrenderCylinder;
import com.example.system.exception.SurrenderCylinderNotFoundException;
import com.example.system.repository.SurrenderCylinderRepository;

@Service
public class SurrenderCylinderService implements SurrenderCylinderServiceInterface{

	@Autowired
	private SurrenderCylinderRepository surrenderrepo;
	
	@Override
	public SurrenderCylinder insertSurrenderCylinder(SurrenderCylinder surrenderCylinder)throws SurrenderCylinderNotFoundException{
		// TODO Auto-generated method stub
		surrenderCylinder.setSurrenderDate(LocalDate.now());	
		return surrenderrepo.save(surrenderCylinder);
	}
//
	@Override
	public SurrenderCylinder updateSurrenderCylinder(SurrenderCylinder surrenderCylinder)throws SurrenderCylinderNotFoundException{
		// TODO Auto-generated method stub
		int id=1;
		SurrenderCylinder sc = surrenderrepo.findById(id).
				orElseThrow(()->new SurrenderCylinderNotFoundException("No Record found"));
		
		sc.setSurrenderDate(surrenderCylinder.getSurrenderDate());
		sc.setSurrenderId(surrenderCylinder.getSurrenderId());
		return surrenderrepo.save(sc);
	}

	@Override
	public int countSurrenderedCylinders() {
		// TODO Auto-generated method stub
		List <SurrenderCylinder> s= surrenderrepo.findAll();
		return s.size();
				
		
	}

	@Override
	public SurrenderCylinder deleteSurrenderCylinder(int surrenderCylinderId) {
		// TODO Auto-generated method stub
		surrenderrepo.deleteById(surrenderCylinderId);
		return null;
	}

}
