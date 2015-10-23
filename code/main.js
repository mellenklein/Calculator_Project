// Set variables to select each element on the page:
var num_one = document.getElementById('num_one');
var num_two = document.getElementById('num_two');
var operator = document.getElementById('operator')
var addBtn = document.getElementById('addBtn');
var subtBtn = document.getElementById('subtBtn');
var multBtn = document.getElementById('multBtn');
var divideBtn = document.getElementById('divideBtn');
var equalBtn = document.getElementById('equalBtn');
var printAnswer = document.getElementById('answer');
var screenContent = [];
var btnValue = function(numberButton){
  input.value = btnValue;
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Create a function to calculate the answer:
      // The function finds the value of num_one and num_two, converts both strings to numbers, then adds them together.

//--------------Number Handler Functions-----------------//

// When a number button is clicked:
  var handleClickOne = function(){
    // if a previous answer is displayed on the screen, clear it first.r
    //Update the appropriate input box to reflect the number clicked.
    if(operator.value === ""){
      num_one.value += 1;
    } else {
      num_two.value += 1;
    }
    //Then print the number to the answer box.
    printAnswer.innerHTML += 1;
  }

  var handleClickTwo = function(){
    if(operator.value === ""){
      num_one.value += 2;
    } else {
      num_two.value += 2;
    }
    printAnswer.innerHTML += 2;
  }
  var handleClickThree = function(){
    if(operator.value === ""){
      num_one.value += 3;
    } else {
      num_two.value += 3;
    }
    printAnswer.innerHTML += 3;
  }
  var handleClickFour = function(){
    if(operator.value === ""){
      num_one.value += 4;
    } else {
      num_two.value += 4;
    }
    printAnswer.innerHTML += 4;
  }
  var handleClickFive = function(){
    if(operator.value === ""){
      num_one.value += 5;
    } else {
      num_two.value += 5;
    }
    printAnswer.innerHTML += 5;
  }
  var handleClickSix = function(){
    if(operator.value === ""){
      num_one.value += 6;
    } else {
      num_two.value += 6;
    }
    printAnswer.innerHTML += 6;
  }
  var handleClickSeven = function(){
    if(operator.value === ""){
      num_one.value += 7;
    } else {
      num_two.value += 7;
    }
    printAnswer.innerHTML += 7;
  }
  var handleClickEight = function(){
    if(operator.value === ""){
      num_one.value += 8;
    } else {
      num_two.value += 8;
    }
    printAnswer.innerHTML += 8;
  }
  var handleClickNine = function(){
    if(operator.value === ""){
      num_one.value += 9;
    } else {
      num_two.value += 9;
    }
    printAnswer.innerHTML += 9;
  }
  var handleClickZero = function(){
    if(operator.value === ""){
      num_one.value += 0;
    } else {
      num_two.value += 0;
    }
    printAnswer.innerHTML += 0;
  }
  var handleClickDecimal = function(){
    if(operator.value === ""){
      num_one.value += ".";
    } else {
      num_two.value += ".";
    }
    printAnswer.innerHTML += ".";
  }

//----------------Operator Handler Functions------------//
  var handleClickAdd = function(){
    operator.value = "+";
    printAnswer.innerHTML += " + ";
  }
  var handleClickSubt = function(){
    operator.value = "-";
    printAnswer.innerHTML += " - ";
  }
  var handleClickMult = function(){
    operator.value = "*";
    printAnswer.innerHTML += " * ";
  }
  var handleClickDivide = function(){
    operator.value = "/";
    printAnswer.innerHTML += " / "
  }

//-----------Equals Button Handler Functions---------------//
  var addExpression = function(){
    var sum = Number(num_one.value) + Number(num_two.value);
    // Update the content of answer in the html to include the sum we calculated.
    printAnswer.innerHTML = sum;
    console.log(sum);
}
  var subtExpression = function() {
    var diff = Number(num_one.value) - Number(num_two.value);
    printAnswer.innerHTML = diff;
    console.log(diff);
  }
  var multExpression = function() {
    var prod = Number(num_one.value) * Number(num_two.value);
    printAnswer.innerHTML = prod;
    console.log(prod);
  }
  var divideExpression = function() {
    var quotient = Number(num_one.value) / Number(num_two.value);
    printAnswer.innerHTML = quotient;
    console.log(quotient);
  }

// When equal button is clicked:
  var handleClickEqual = function() {
    //if operator is a plus sign, run the add function
    if ( operator.value === "+" ) {
      //then run the handleClickAdd function
      addExpression();
    }
    else if (operator.value === "-"){
      subtExpression();
    } else if (operator.value === "*"){
      multExpression();
    } else if (operator.value === "/"){
      divideExpression();
    }
  }

// When clear button is clicked:
  var handleClickClear = function() {
    num_one.value = "";
    num_two.value = "";
    operator.value = "";
    printAnswer.innerHTML = "";
  }

  var clearAfterCalc = function() {
    // if printAnswer.innerHTML = quotient or product or sum or diff
    // next time a number is pressed, run the clear function to clear the screen first
  }

//---------Click Handler Event Listeners---------//
// Set the function to run everytime the button is clicked:
addBtn.addEventListener('click', handleClickAdd);
subtBtn.addEventListener('click', handleClickSubt);
multBtn.addEventListener('click', handleClickMult);
divideBtn.addEventListener('click', handleClickDivide);
equalBtn.addEventListener('click', handleClickEqual);
clearBtn.addEventListener('click', handleClickClear);
decimalBtn.addEventListener('click', handleClickDecimal)
oneBtn.addEventListener('click', handleClickOne);
twoBtn.addEventListener('click', handleClickTwo);
threeBtn.addEventListener('click', handleClickThree);
fourBtn.addEventListener('click', handleClickFour);
fiveBtn.addEventListener('click', handleClickFive);
sixBtn.addEventListener('click', handleClickSix);
sevenBtn.addEventListener('click', handleClickSeven);
eightBtn.addEventListener('click', handleClickEight);
nineBtn.addEventListener('click', handleClickNine);
zeroBtn.addEventListener('click', handleClickZero);

});
