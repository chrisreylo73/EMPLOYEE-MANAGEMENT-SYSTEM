- Make database in postgres 
- go to application.properties and put in the following code:

   - spring.datasource.url=jdbc:postgresql://localhost:5432/employee_management_system?useSSL=false
   - spring.datasource.username=postgres
   - spring.datasource.password=password
   - spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
   - spring.jpa.hibernate.ddl-auto=update

- Create 4 packages using Java projects section
   - com.chrisreylo.emp_management.model
   - com.chrisreylo.emp_management.controller
   - com.chrisreylo.emp_management.repository
   - com.chrisreylo.emp_management.exception

- Created class Employee under model
