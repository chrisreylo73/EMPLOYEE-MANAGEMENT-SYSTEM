package com.chrisreylo.emp_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chrisreylo.emp_management.repository.EmployeeRepository;
import com.chrisreylo.emp_management.model.Employee;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
   @Autowired
   private EmployeeRepository employeeRepository;

   // This method handles GET requests to "/api/v1/employees" and returns a list of employees.
   @GetMapping("/employees")
   public List<Employee> getAllEmployees() {
      // Call the findAll() method on the employeeRepository to retrieve all employees and return them.
      return employeeRepository.findAll();
   }
}
