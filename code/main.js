document.addEventListener("DOMContentLoaded", function(event) {
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
  var numbers = document.getElementsByClassName('number');
  // Create a function to calculate the answer:
      // The function finds the value of num_one and num_two, converts both strings to numbers, then adds them together.

//--------------Number Handler Functions-----------------//

// When a number button is clicked:

// var handleClickNumber = function(){
//   var value = event.target.value;
//   if(operator.value === ""){
//     num_one.value += value;
//   } else num_two.value += value;
// }

  var handleNumberClick = function(event){
    //Update the appropriate input box to reflect the number clicked.
      if(operator.value === ""){
        num_one.value += event.target.value;
      } else {
        num_two.value += event.target.value;
      }
    //Then print the number to the answer box.
    printAnswer.innerHTML += event.target.value;
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

  var enter = function(){
    // if(keyCode === 13){
    //   handleClickEqual();
    // }
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


for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', handleNumberClick);
}

}); //End of DOM content load
