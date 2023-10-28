package com.chrisreylo.emp_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chrisreylo.emp_management.model.Employee;
@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Long>{
   
}
