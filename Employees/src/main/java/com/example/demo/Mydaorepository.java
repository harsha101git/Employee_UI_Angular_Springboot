package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.example.demo.Employee;
 
@Repository
public interface Mydaorepository extends JpaRepository<Employee, Integer> {
 
}