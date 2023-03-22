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

//shows result of query in table then goes back to prompt
function viewAllDepartments() {
    connection.query("SELECT * FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        options();
    });
}

//function that takes the id, title, salary, and deparment name for the roles in database
//then returns to the prompts
function viewAllRoles() {
  const query = 
  "SELECT role.id, role.title, department.department_name AS department, role.salary FROM role JOIN department ON role.department_id = department.id";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    options();
  })
}

//exits prompt
function quitPrompt() {
  console.log('Goodbye!');
  process.exit();
}

options();