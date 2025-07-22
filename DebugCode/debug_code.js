function  performOperations() {
    // Get user input from input fields
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById("input2").value;

    // Check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)){
        // Perform the operations

        let add = addition(num1, num2);
        let sub = subtract(num1, num2);
        let mul = multiply(num1, num2);
        let div = divide(num1, num2);

        let result = `
            Addition : ${add} <br/>
            Subtraction : ${sub} <br/>
            Multiplication : ${mul} <br/>
            Divide : ${div} <br/>
        `
        // display the result
        displayResult(result);
    }
    else    
        displayResult("Please enter valid numbers");
}

function multiply(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a*b;
}

function addition(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Add the numbers
    return a+b;
}

function subtract(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Subtract the numbers
    return a-b;
}

function divide(a,b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Divide the numbers
    return a/b;
}

function displayResult(result){
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is : ${result}`;
}