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
   private String lastName; // Should be "lastName"?
   @Column(name="email_id")
   private String emailId;

   // Default constructor
   public Employee() {
   }

   // Constructor with parameters for all attributes
   public Employee(int id, String firstName, String lastName, String emailId) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
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

   public String getLastName() {
      return this.lastName;
   }

   public void setLastName(String lastName) {
      this.lastName = lastName;
   }

   public String getEmailId() {
      return this.emailId;
   }

   public void setEmailId(String emailId) {
      this.emailId = emailId;
   }
}
