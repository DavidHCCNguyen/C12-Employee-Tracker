# 12: Employee Tracker

## Task

This is a way that creatively makes use of code for managering jobs basically.
It requires: Express, Inquirer and Mysql2 npms (View below to read more about it.)

This is to showcase how it would be used in action.

## Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Links

The following video shows an example of the application being used from the command line:

[A ScreenCastify recording](https://watch.screencastify.com/v/GtpMQjYYcn64WDj0yW2U)

[A youtube video recording if ScreenCastify stops or doesn't exist](https://youtu.be/e9Pg--T2Alc)

## Npm and Terminal Look

[MySQL2 package](https://www.npmjs.com/package/mysql2)

[Documentation on MySQL2](https://www.npmjs.com/package/mysql2).

[Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)

[Express package](https://www.npmjs.com/package/express)

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/Th-manager-look-in-full.png)