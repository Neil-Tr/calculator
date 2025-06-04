//4 basic functions to calculate
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0 ) return 'ERROR';
    return parseFloat((a / b).toFixed(13));
}

//function to calculate based on a pair of number
function operate(firstNum, secondNum, operator) {
    switch (operator) {

        case '+':
            return add(firstNum, secondNum);
        
        case '-':
            return subtract(firstNum, secondNum);

        case '*':
            return multiply(firstNum, secondNum);


        case '/':
            return divide(firstNum, secondNum);

    }
}

//function to listen to all button clicked

let inputNumber = ''; 
let operator ='';
let myArray= [];
let result;
const display = document.getElementById('display');

const buttons = document.querySelectorAll('button');

function updateDisplay(text) {
    display.textContent = text;
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let buttonText = this.textContent;

        if (myArray.length === 0 && buttonText === '=')
        {
            return;
        }
        
        if (buttonText === 'AC') {
            inputNumber = '';
            myArray = [];
            result = null;
            updateDisplay('0');
            return;
        }


        if (!isNaN(buttonText)|| (buttonText ==='.')) {
         inputNumber += buttonText;
         updateDisplay(inputNumber);
        }
        else if (['+', '-', '*', '/', '='].includes(buttonText)) {
            // if (inputNumber === '') return;
            let number = Number(inputNumber);
            inputNumber = '';

//First time, myArray is empty. Push number and operator to Array        
            if (myArray.length <= 1) {
                if (number !== 0) {
                myArray.push(number);
                }
                if (buttonText !== '=') myArray.push(buttonText);
                console.log(myArray);
                updateDisplay(`${number} ${buttonText}`);
            }

//If we already have [number, operator] in myArray
            else if (myArray.length === 2) {
                const prevNumber = myArray[0];
                const prevOperator = myArray[1];
                switch (prevOperator) {

                case ('+') : 
                    result = add(prevNumber, number);
                    break;   

                case ('-') : 
                    result = subtract(prevNumber, number);
                    break;
                
                case ('*') : 
                    result = multiply(prevNumber, number);
                    break;

                case ('/') : 
                    result = divide(prevNumber, number);
                    break;
                default: 
                    result = 'ERROR'
            }    

            if (result === 'ERROR') {
                updateDisplay(result.toString());
                myArray = [];
                return;
            }

//Reset Array and keep the latest result
//If operator not '=', store it in the array    
                if (buttonText === '=') {

                result = Number(result.toFixed(13)).toString();
                updateDisplay(result);
                console.log(result);
                myArray = [result]; 
                }
                else {
                    updateDisplay(`${result} ${buttonText}`);
                    myArray = [result, buttonText];
                }
            }
        }
});
})

//function to get number --- maybe don't need

// function getNumber(buttonText) {   
// let number;
//     if (!isNaN(buttonText)) {
//         inputNumber += buttonText;
//         return [inputNumber, null];
//     }
//     else if (['+', '-', '*', '/', '='].includes(buttonText)) {
//     number = inputNumber;
//     operator = buttonText;
//     inputNumber = '';
//         return  [number, operator];
// }
// }



//function to get the second number



//function to display the number on the Display



//function to clear the Display

