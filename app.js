// calculator

var num1 = 0;
var num2 = 0;
var operator = '';

var input = document.getElementById('display');
var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var btnThree = document.getElementById('btnThree');
var btnPlus = document.getElementById('btnPlus');
var btnFour = document.getElementById('btnFour');
var btnFive = document.getElementById('btnFive');
var btnSix = document.getElementById('btnSix');
var btnMinus = document.getElementById('btnMinus');
var btnSeven = document.getElementById('btnSeven');
var btnEight = document.getElementById('btnEight');
var btnNine = document.getElementById('btnNine');
var btnMultiply = document.getElementById('btnMultiply');
var btnZero = document.getElementById('btnZero');
var btnReset = document.getElementById('btnReset');
var btnEqual = document.getElementById('btnEqual');
var btnDivide = document.getElementById('btnDivide');

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0 || num1 === 0){
        alert('Nice try you cannot divide by 0, go ahead and reset by pressing C');
    } else{
        return num1 / num2; 
    }  
}

function operate(num1, num2, operator) {
    if (operator === '+') {
        return addition(num1, num2);
    } else if (operator === '-') {
        return subtraction(num1, num2);
    } else if (operator === 'x') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

function calculator() {
    btnOne.addEventListener('click', function () {
        input.value += '1';
    });

    btnTwo.addEventListener('click', function () {
        input.value += '2';
    });

    btnThree.addEventListener('click', function () {
        input.value += '3';
    });

    btnFour.addEventListener('click', function () {
        input.value += '4';
    });

    btnFive.addEventListener('click', function () {
        input.value += '5';
    });

    btnSix.addEventListener('click', function () {
        input.value += '6';
    });

    btnSeven.addEventListener('click', function () {
        input.value += '7';
    });

    btnEight.addEventListener('click', function () {
        input.value += '8';
    });

    btnNine.addEventListener('click', function () {
        input.value += '9';
    });

    btnZero.addEventListener('click', function () {
        input.value += '0';
    });

    btnPlus.addEventListener('click', function () {
        num1 = parseFloat(input.value);
        operator = '+';
        input.value = '';
    });

    btnMinus.addEventListener('click', function () {
        num1 = parseFloat(input.value);
        operator = '-';
        input.value = '';
    });

    btnMultiply.addEventListener('click', function () {
        num1 = parseFloat(input.value);
        operator = 'x';
        input.value = '';
    });

    btnDivide.addEventListener('click', function () {
        num1 = parseFloat(input.value);
        operator = '/';
        input.value = '';
    });

    btnReset.addEventListener('click', function () {
        input.value = '';
        num1 = 0;
        num2 = 0;
        operator = '';
    });

    btnEqual.addEventListener('click', function () {
        num2 = parseFloat(input.value);
        input.value = operate(num1, num2, operator);
        num1 = parseFloat(input.value);
        num2 = 0;
        operator = '';
    });
}

calculator();