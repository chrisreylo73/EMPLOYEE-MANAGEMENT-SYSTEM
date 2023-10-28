package com.chrisreylo.emp_management.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {

   // Define the primary key and set it to auto-generate
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private int id;

   // Define columns for first name, last name, and email ID
   @Column(name="first_name")
   private String firstName;
   @Column(name="last_name")
   private String secondName; // Should be "lastName"?
   @Column(name="email_id")
   private String emailId;

   // Default constructor
   public Employee() {
   }

   // Constructor with parameters for all attributes
   public Employee(int id, String firstName, String secondName, String emailId) {
      this.id = id;
      this.firstName = firstName;
      this.secondName = secondName;
      this.emailId = emailId;
   }

   // Getters and setters for all attributes

   public int getId() {
      return this.id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getFirstName() {
      return this.firstName;
   }

   public void setFirstName(String firstName) {
      this.firstName = firstName;
   }

   public String getSecondName() {
      return this.secondName;
   }

   public void setSecondName(String secondName) {
      this.secondName = secondName;
   }

   public String getEmailId() {
      return this.emailId;
   }

   public void setEmailId(String emailId) {
      this.emailId = emailId;
   }
}
