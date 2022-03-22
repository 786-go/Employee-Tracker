const inquirer = require('inquirer');
const mySQL2 = require('mysql2');
require('console.table');

const db = mySQL2.createConnection({
    host:'localhost', user: 'root', password: 'password', database: 'emp_tracker'
})
db.connect(function(err){
if(err) throw err;
console.log("Database connected for employee tracker")
employeeTracker()
})

function employeeTracker(){



    
}