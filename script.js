// const calculatorForm = document.getElementById('calculator');
// const num1Input = document.getElementById('num1');
// const num2Input = document.getElementById('num2');
// const calculateBtn = document.getElementById('calculate-btn');
// const resultParagraph = document.getElementById('result');

// const STORAGE_NAME = 'calcResult';

// function calculateSum() {
//     const num1 = parseInt(num1Input.value);
//     const num2 = parseInt(num2Input.value);
//     const sum = num1 + num2;
//     resultParagraph.innerHTML = `Hasil: ${sum}`;
//     localStorage.setItem(STORAGE_NAME, sum);
// }

// function retrieveStoredResult() {
//     const storedResult = localStorage.getItem(STORAGE_NAME);
//     if (storedResult !== null) {
//         resultParagraph.innerHTML = `Hasil: ${storedResult}`;
//     }
// }

// calculatorForm.addEventListener('load', retrieveStoredResult);
// calculateBtn.addEventListener('click', calculateSum);

// retrieveStoredResult();

const calculatorForm = document.getElementById('calculator');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate-btn');
const resultParagraph = document.getElementById('result');

function calculateSum() {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    const sum = num1 + num2;
    resultParagraph.innerHTML = `Hasil: ${sum}`;
}

calculateBtn.addEventListener('click', calculateSum);
