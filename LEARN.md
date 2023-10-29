# RUN
- mvn install
- java -jar target/emp_management-0.0.1-SNAPSHOT.jar 

# BACKEND STEPS 
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

- Created class Employee under model package
- Created interface EmployeeRepository that extends JpaRepository under repository package. 
- Created ResourceNotFoundException under exceptions package.
- Created Controller under controller package.
- Created Jar file using mvn install
- Ran Jar file using  java -jar target/emp_management-0.0.1-SNAPSHOT.jar 
- Manually added employees to postgres db
- Went to http://localhost:8080/api/v1/employees to see if I can query the database
- Or you can use postman


# FRONTEND STEPS
- Create initial setup
   - npx create-react-app react-frontend;