-- Drop existing databases if they exist
DROP DATABASE IF EXISTS department_db;
DROP DATABASE IF EXISTS role_db;
DROP DATABASE IF EXISTS employee_db;

-- Create the 'department_db' database
CREATE DATABASE department_db;
USE department_db;

-- Create the 'department' table
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);

-- Insert example data into the 'department' table
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering');

-- Create the 'role_db' database
CREATE DATABASE role_db;
USE role_db;

-- Create the 'role' table
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Insert example data into the 'role' table
INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Manager', 50000, 1),
  ('Sales Representative', 30000, 1),
  ('Marketing Manager', 55000, 2),
  ('Marketing Coordinator', 35000, 2),
  ('Software Engineer', 60000, 3),
  ('Quality Assurance Engineer', 45000, 3);

-- Create the 'employee_db' database
CREATE DATABASE employee_db;
USE employee_db;

-- Create the 'employee' table
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert example data into the 'employee' table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Mike', 'Johnson', 3, NULL),
  ('Sarah', 'Williams', 4, 3),
  ('David', 'Lee', 5, NULL),
  ('Emily', 'Brown', 6, 5);
