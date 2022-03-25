const inquirer = require('inquirer');
const mySQL2 = require('mysql2');
require('console.table');

const db = mySQL2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'emp_tracker'
})

db.connect(function (err) {
    if (err) throw err;
    console.log("Database connected for employee tracker");
    employeeTracker()

});

function employeeTracker() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'q1',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit the program'],
            message: 'Welcome! What would you like to do?',

        },
    ])
        .then(function (responses) {
            if (responses.q1 == 'View all departments') {
                db.query('select * from department', function (err, data) {
                    if (err) throw err;
                    console.table(data)
                })
                employeeTracker()
            }
            else if (responses.q1 == 'View all roles') {
                db.query('select * from roles;', function (err, data) {
                    if (err) throw err;
                    console.table(data)
                    employeeTracker()
                })
                
            }
            else if (responses.q1 == 'View all employees') {
                db.query('select * from employee, roles where employee.role_id=roles.id;', function (err, data) {
                    if (err) throw err;
                    console.table(data)
                    employeeTracker()
                })
                
            }
            else if (responses.q1 == 'Add a department') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'dept',
                        message: 'What is the name of the department you want to add?',
                    },
                ]).then(function ({ dept })  {
                    db.query('INSERT INTO DEPARTMENT(NAME)VALUES(?);',dept, function (err, data) {
                        if (err) throw err;
                        console.table(data)
                        employeeTracker()
                    })
                
                })
            }
            else if (responses.q1 == 'Add a role') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roletitle',
                        message: 'What is the title of the role you want to add?',
                    },
                    {
                        type: 'input',
                        name: 'rolesalary',
                        message: 'What is the salary of the role you want to add?',
                    },
                    {
                        type: 'list',
                        choices:[1,2,3,4],
                        name: 'dept_id',
                        message: 'What is the department ID of the role you want to add?',
                    },
                ]).then(function ({roletitle, rolesalary,dept_id})  {
                    db.query('INSERT INTO ROLES(TITLE, SALARY, department_id)VALUES(?,?,?);',[roletitle, rolesalary, dept_id], function (err, data) {
                        if (err) throw err;
                        console.table(data)
                        employeeTracker()
                    })
                
                })
            }
            else {
                console.log("Thank you for using the program.")
                db.end()
                process.exit(0)
            }
        })
}


