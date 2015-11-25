// As soon as DOM loads, trigger the code inside:
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
  var operators = document.getElementsByClassName('operator');
  // Create a function to calculate the answer:
      // The function finds the value of num_one and num_two, converts both strings to numbers, then adds them together.

//--------------Number Handler Function-----------------//
// When a 'number' button is clicked:
  var handleNumberClick = function(event){
    // Update the appropriate input box to reflect the number clicked.
      if(operator.value === ""){
        if(num_one.value === ""){
          printAnswer.innerHTML = event.target.value;
        } else printAnswer.innerHTML += event.target.value;
          num_one.value += event.target.value;
          solution.value = "";
      } else {
        num_two.value += event.target.value;
        printAnswer.innerHTML += event.target.value;
      }
  }

//----------------Operator Handler Functions------------//
  var handleOperatorClick = function(event){
  //If you click an operator while a number is already present in the answer box, then treat that number as the first input (allows continuous calculations)
    if(solution.value != ""){
      num_one.value = solution.value;
    }
  //If you click an operator while an operator is already present in the answer box, then replace with new operator (prevents two consecutive operators)
    if(operator.value != ""){
      printAnswer.innerHTML = num_one.value;
    }
    operator.value = event.target.value;
    printAnswer.innerHTML += " " + event.target.value + " ";
  }

//-----------Equals Button Handler Functions---------------//

// When equal button is clicked:
  var handleClickEqual = function() {
    var a = Number(num_one.value);
    var b = Number(num_two.value);
    if (operator.value === "+") {
      var solve = a + b;
    } else if (operator.value === "-"){
      var solve = a - b;
    } else if (operator.value === "x"){
      var solve = a * b;
    } else if (operator.value === "/"){
      var solve = a / b;
    } else if (operator.value === ""){
      var solve = solution.value;
    }
// Update the content of answer in the html to display the answer we calculated.
    printAnswer.innerHTML = solve;
    solution.value = solve;
    clearAfterCalc();
  }

// When clear button is clicked:
  var handleClickClear = function() {
    num_one.value = "";
    num_two.value = "";
    operator.value = "";
    solution.value = "";
    printAnswer.innerHTML = "";
  }

  var clearAfterCalc = function(){
    num_one.value = "";
    num_two.value = "";
    operator.value = "";
  }

  var enter = function(e){
    if(e.keyCode === 187 || e.keyCode === 13){
      e.preventDefault();
      handleClickEqual(e);
    }
  }

  var spaceClear = function(e){
    if(e.keyCode === 32){
      e.preventDefault();
      handleClickClear(e);
    }
  }

  //take the charcode of the event target and print the corresponding value to the box.
  var numCodes = function(e){
    var code;
    if(e.keyCode) {
      code = e.keyCode;
    } else if (e.which) {
      code = e.which
    };
    var character = String.fromCharCode(code);
    console.log(Number(character));
    // printAnswer.innerHTML += Number(character);
    if(operator.value === ""){
      if(num_one.value === ""){
        printAnswer.innerHTML = Number(character);
      } else printAnswer.innerHTML += Number(character);
        num_one.value += Number(character);
        solution.value = "";
    } else {
      num_two.value += Number(character);
      printAnswer.innerHTML += Number(character);
    }
  }


//---------Click Handler Event Listeners---------//
// Set the function to run everytime the button is clicked:
clearBtn.addEventListener('click', handleClickClear);
document.addEventListener('keydown', spaceClear)
equalBtn.addEventListener('click', handleClickEqual);
document.addEventListener('keydown', enter);
document.addEventListener('keypress', numCodes);

// For each number button (0-9 including .) ->
//add an event listener so that when any of the number buttons are clicked,
// the handleNumberClick fucntions automatically runs.
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', handleNumberClick);
}
//Same for loop set up for the operators:
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', handleOperatorClick);
}

}); //End of DOM content load
