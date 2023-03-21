const inquirer = require('inquirer');
const consoleTable = require('console.table');
const connection = require('./db/connnection');

inquirer.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all Employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
        ]
    }
])