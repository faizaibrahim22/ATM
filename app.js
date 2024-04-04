import inquirer from "inquirer";
let myBalance = 5000; // Dollar 
let myPin = 2323;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }]);
if (pinAnswer.pin === myPin) {
    console.log("correct my pin !!");
    let codeAnswer = await inquirer.prompt([{
            name: "code",
            message: "please selec a option",
            type: "list",
            choices: ["withdraw", "check  balances"],
        }]);
    if (codeAnswer.code === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]);
        myBalance -= amountAns.amount;
        console.log("your remaining balances : " + myBalance);
    }
    else if (codeAnswer.code === "checkbalances") {
        console.log("your balances is : " + myBalance);
    }
}
else {
    console.log("incorrect mypin code!!");
}
