package com.example.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.system.entity.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Integer>{

}
