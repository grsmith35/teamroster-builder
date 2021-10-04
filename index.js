const inquirer = require("inquirer");
const {writeFile} = require("./write-page");
const Teammembers = require("./lib/teammembers");
const { type } = require("os");

function GetInput() {

    let managerSet = false;
    
    // GetInput.prototype.getMember = function() {
    //     inquirer
    //     .prompt([
    //         {
    //             type: 'input',
    //             name: 'managername',
    //             message: 'Please enter the name of your team Manager.',
    //             validate: nameInput => {
    //                 if(nameInput) {
    //                     return true;
    //                 } else {
    //                     console.log("Please enter a valid name!");
    //                     return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'managerid',
    //             message: 'Please enter employee ID of Manager.',
    //             validate: roleInput => {
    //                 if(roleInput) {
    //                     return true;
    //                 } else {
    //                     console.log("Please enter a valid employee number!");
    //                     return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'manageremail',
    //             message: 'Please enter manager email.',
    //             validate: roleInput => {
    //                 if(roleInput) {
    //                     return true;
    //                 } else {
    //                     console.log("Please enter a valid email!");
    //                     return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'manageroffice',
    //             message: 'Please enter managers office number.',
    //             validate: roleInput => {
    //                 if(roleInput) {
    //                     return true;
    //                 } else {
    //                     console.log("Please enter managers office number!");
    //                 }
    //             }
    //         },
    //     ])
    // }
    GetInput.prototype.getManager = function() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managername',
                message: 'Please enter the name of your team Manager.',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerid',
                message: 'Please enter employee ID of Manager.',
                validate: roleInput => {
                    if(roleInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid employee number!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manageremail',
                message: 'Please enter manager email.',
                validate: roleInput => {
                    if(roleInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid email!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manageroffice',
                message: 'Please enter managers office number.',
                validate: roleInput => {
                    if(roleInput) {
                        return true;
                    } else {
                        console.log("Please enter managers office number!");
                    }
                }
            },
        ])
        .then(function(data) {
            data["role"] = "manager";
            console.log(data);
            let manager = new Teammembers(data);
            managerSet = true;
        })
        //memberType();
    }

    GetInput.prototype.memberType = function() {
        inquirer
        .prompt([
            {
                type: "text",
                name: "membertype",
                message: "Would you like to add an Engineer(E) or and Intern(I)?",
                validate: roleInput => {
                    if(roleInput === "E" || roleInput === "I" || roleInput === "i" || roleInput === "e") {
                        return true;
                    } else {
                        console.log("Please enter an E for engineer or I for intern!");
                        return false;
                    }
                }
            }
        ])
        .then(function(data) {
            console.log("got to membertype.")
            if(data.membertype === "E" || data.membertype === "e") {
                console.log("we got an engineer")
            }
            else {
                console.log("We got an intern!")
            }
        })
    }

    GetInput.prototype.addEngineer = function() {
        inquirer
        .prompt(
            {
                type: "text",
                name: "name",
                message: "Please enter Engineers name?",
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a valid name!");
                        return false;
                    }
                }
            }
        )
    }

    GetInput.prototype.checkTurn = function() {
        if(managerSet) {
            memberType();
        } else {
            getManager();
        }
    }
}


module.exports = GetInput;