var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table')
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employees_db"
})
connection.connect(function (err) {
    if (err) throw err;
    console.log(`connected as Id ${connection.threadId}.`);
});


function askUser() {
    inquirer.prompt([
        {
            name: "addViewUpdate",
            type: "list",
            message: "Would you like to add to, view, or update the employee database?",
            choices: ["ADD", "VIEW", "UPDATE", "EXIT APPLICATION"]
        }
    ]).then(function ({ addViewUpdate }) {
        // console.log(addViewUpdate);
        if (addViewUpdate === "ADD") {
            console.log("Time To Add");
            add();
        }
        else if (addViewUpdate === "VIEW") {
            console.log("Time to View");
            view();
        }
        else if (addViewUpdate === "UPDATE") {
            console.log("Time to Update");
            update();
        }
        else if (addViewUpdate === "EXIT APPLICATION") {
            console.log("Goodbye!")
            connection.end();
        }
    })
}
askUser();

function add() {
    inquirer.prompt([
        {
            name: "addWhich",
            type: "list",
            message: "What would you like to add?",
            choices: ["DEPARTMENT", "ROLE", "EMPLOYEE"]
        }

    ]).then(function ({ addWhich }) {
        console.log(addWhich);
        if (addWhich === "DEPARTMENT") {
            console.log("Let's add a new department!");
            addDepartment();
        }
        else if (addWhich === "ROLE") {
            console.log("Let's add a new role!");
            addRole();
        }
        else if (addViewUpdate === "EMPLOYEE") {
            console.log("Let's add a new employee!");
            addEmployee();
        }
    })
}