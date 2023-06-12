const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Lost1423!',
  database: 'employee_tracker',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the employee_tracker database');
  startApplication();
});

// Start the application
function startApplication() {
  inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit',
    ],
  }).then((answer) => {
    switch (answer.action) {
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        connection.end();
        console.log('Goodbye!');
        break;
    }
  });
}

// View all departments
function viewAllDepartments() {
  connection.query('SELECT * FROM department', (err, departments) => {
    if (err) throw err;
    console.table(departments);
    startApplication();
  });
}

// View all roles
function viewAllRoles() {
  const query = `
    SELECT role.id, role.title, role.salary, department.name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id
  `;
  connection.query(query, (err, roles) => {
    if (err) throw err;
    console.table(roles);
    startApplication();
  });
}

// View all employees
function viewAllEmployees() {
  const query = `
    SELECT
      e.id,
      e.first_name,
      e.last_name,
      role.title AS role,
      department.name AS department,
      role.salary,
      CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee AS e
    LEFT JOIN role ON e.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee AS m ON e.manager_id = m.id
  `;
  connection.query(query, (err, employees) => {
    if (err) throw err;
    console.table(employees);
    startApplication();
  });
}

// Add a department
function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:',
  }).then((answer) => {
    const department = {
      name: answer.name,
    };
    connection.query('INSERT INTO department SET ?', department, (err, res) => {
      if (err) throw err;
      console.log('Department added successfully!');
      startApplication();
    });
  });
}

// Add a role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for the role:',
    },
  ]).then((answers) => {
    const role = {
      title: answers.title,
      salary: answers.salary,
      department_id: answers.department_id,
    };
    connection.query('INSERT INTO role SET ?', role, (err, res) => {
      if (err) throw err;
      console.log('Role added successfully!');
      startApplication();
    });
  });
}

// Add an employee
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for the employee:',
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "Enter the employee's manager ID (leave blank if none):",
    },
  ]).then((answers) => {
    const employee = {
      first_name: answers.first_name,
      last_name: answers.last_name,
      role_id: answers.role_id,
      manager_id: answers.manager_id || null,
    };
    connection.query('INSERT INTO employee SET ?', employee, (err, res) => {
      if (err) throw err;
      console.log('Employee added successfully!');
      startApplication();
    });
  });
}

// Update an employee role
function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Enter the ID of the employee you want to update:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the new role ID for the employee:',
    },
  ]).then((answers) => {
    const { employee_id, role_id } = answers;
    connection.query(
      'UPDATE employee SET role_id = ? WHERE id = ?',
      [role_id, employee_id],
      (err, res) => {
        if (err) throw err;
        console.log('Employee role updated successfully!');
        startApplication();
      }
    );
  });
}
