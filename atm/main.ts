#! /usr/bin/env node
import inquirer from "inquirer";


let myBalance = 10000;  //Doller
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
  [
     {
        name: "pin",
        message: "Enter Your pin",
        type: "number",
     }
  ]
)

//     12345   ===   1234  ans false
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!")

    let operationAns = await inquirer.prompt(
    [
        {
          name: "operation",
          message: "please select option",
          type: "list",
          choices: ["Withdrow" ,"Fast Cash", "Check balance"]
            

        } 
    ]
) 


if(operationAns.operation === "Withdrow"){

    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]
    )
   
  
    myBalance -= amountAns.amount

    if(amountAns.amount > myBalance){
        console.log("Insufficient balance")       
    }
   else{

        console.log(`your ramaining balance is:  ${myBalance} `)
   }

  
      
 }

 else if(operationAns.operation === "Fast Cash"){
    
    let fastCashAmount = await inquirer.prompt(
        [
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices:["1000","2000","5000","7000"]
            }
        ]
    )

    myBalance -= fastCashAmount.fastCash;
    console.log(`your ramaining balance is:  ${myBalance} `)


}

else if(operationAns.operation === "Check balance"){
    console.log(`your balance is: ${myBalance} `)             //Template literal
    // console.log("your balance is: " + myBalace)
}

}
else{
    console.log("Incorrect pin number")
}
