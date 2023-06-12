const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lost1423!',
  database: 'Employee_Tracker',
  connectionLimit: 3, // Adjust as needed
});

module.exports = pool;