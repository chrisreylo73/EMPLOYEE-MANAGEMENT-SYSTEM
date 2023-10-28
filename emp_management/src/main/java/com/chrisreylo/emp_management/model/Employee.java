package com.chrisreylo.emp_management.model;



public class Employee {
   private int id;
   private String firstName;
   private String secondName;
   private String emailId;


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
   public Employee(int id, String firstName, String secondName, String emailId) {
      this.id = id;
      this.firstName = firstName;
      this.secondName = secondName;
      this.emailId = emailId;
   }


   
}
