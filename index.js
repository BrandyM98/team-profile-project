//will generate html
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const inquirer = require("inquirer");
const fs = require("fs");

// TODO: CODE GOES HERE

const teamArray = []; 

// prompts for manager
const addManager = () => {
   return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the managers name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the managers id number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the managers office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Enter an office number.')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};


//prompts for employee
const addEmployee = () => {

return inquirer.prompt ([
{
    type: 'list',
    name: 'role',
    message: "Choose your employees role",
    choices: ['Engineer', 'Intern']
},
{
    type: 'input',
    name: 'name',
    message: "What is the name of the employee?", 
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Enter an employees name.");
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: "Enter the employee's ID.",
    validate: nameInput => {
        if  (isNaN(nameInput)) {
            console.log ("Enter the employee's ID!")
            return false; 
        } else {
            return true;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: "Enter the employee's email.",
    validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
            return true;
        } else {
            console.log ('Enter an email!')
            return false; 
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: "Enter the employees github username.",
    when: (input) => input.role === "Engineer",
    validate: nameInput => {
        if (nameInput ) {
            return true;
        } else {
            console.log ("Enter the employee's github username.")
        }
    }
},
{
    type: 'input',
    name: 'school',
    message: "Enter the intern's school",
    when: (input) => input.role === "Intern",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Enter the intern's school.")
        }
    }
},
{
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to add more team members?',
    default: false
}
])
.then(employeeData => {
let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
let employee; 

if (role === "Engineer") {
    employee = new Engineer (name, id, email, github);

    console.log(employee);

} else if (role === "Intern") {
    employee = new Intern (name, id, email, school);

    console.log(employee);
}

teamArray.push(employee); 

if (confirmAddEmployee) {
    return addEmployee(teamArray); 
} else {
    return teamArray;
}
})

};
//to generate html
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error message
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });