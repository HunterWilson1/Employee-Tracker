const inquirer = require("inquirer");
const consoleTable = require("console.table");
const {db, connection} = require("./db/connnection");


function options() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Quit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.option) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update and employee role":
          updateEmployeeRole();
          break;
        case "Quit":
          quitPrompt();
          break;
      }
    })
    .catch((err) => console.error(err));
}

function viewAllDepartments() {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        options();
    });
}


options();