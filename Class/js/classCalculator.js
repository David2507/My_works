class Calculator {
    constructor(num1,operatin,num2){
        if(operatin === "+"){
            console.log(num1 + num2);
            alert(num1 + num2);
        }
        else if(operatin === "-"){
            console.log(num1 - num2);
            alert(num1 - num2);
        }
        else if(operatin === "*"){
            console.log(num1 * num2);
            alert(num1 * num2);
        }
        else if(operatin === "/"){
            console.log(num1 / num2);
            alert(num1 + num2);
        }
    }
}

let number = new Calculator(5,"*",25);