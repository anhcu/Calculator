const defaultResult = 0;
let currentResult = defaultResult;






//gets input from inout field
function getUserNumberInput () {
    return parseInt(usrInput.value);
}

//generates and write cal. log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator}  ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    //create createAndWriteOutput - operator, resultBeforeCalc, calcNumber
    createAndWriteOutput( '+', initialResult, enteredNumber)
}

function sub() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput( '-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput( '*', initialResult, enteredNumber);
}
 
function div() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput( '/', initialResult, enteredNumber);
}

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}  

function clearAll(){
    inputField.value = '';
}

function empty(){
    document.getElementById('click', 'red');
    // alert('empty');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', div);
clearBtn.addEventListener('click', clearAll);
emptyBtn.addEventListener('click',empty);


