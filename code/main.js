// Set variables to select each element on the page:
var num_one = document.getElementById('num_one');
var num_two = document.getElementById('num_two');
var addBtn = document.getElementById('addBtn');
var subtBtn = document.getElementById('subtBtn');
var multBtn = document.getElementById('multBtn');
var divideBtn = document.getElementById('divideBtn');
var equalBtn = document.getElementById('equalBtn');
var printAnswer = document.getElementById('answer');
var screenContent = [];

document.addEventListener("DOMContentLoaded", function(event) {
  // Create a function to calculate the answer:
      // The function finds the value of num_one and num_two, converts both strings to numbers, then adds them together.
  var handleClickAdd = function(){
    var sum = Number(num_one.value) + Number(num_two.value);
    // Update the content of answer in the html to include the sum we calculated.
    printAnswer.innerHTML = sum;
    console.log(sum);
}
  var handleClickSubt = function() {
    var diff = Number(num_one.value) - Number(num_two.value);
    printAnswer.innerHTML = diff;
    console.log(diff);
  }
  var handleClickMult = function() {
    var prod = Number(num_one.value) * Number(num_two.value);
    printAnswer.innerHTML = prod;
    console.log(prod);
  }
  var handleClickDivide = function() {
    var quotient = Number(num_one.value) / Number(num_two.value);
    printAnswer.innerHTML = quotient;
    console.log(quotient);
  }

// When equal button is clicked:
  var handleClickEqual = function() {
    //if screen box array contains + symbol
    if ( string.indexOf('+') != -1 ) {
      //then run the handleClickAdd function
      var solution = handleClickAdd(string);
    } else if (string.indexOf('-') != -1) {
      var solution = handleClickSubtr(string);
    } else if (string.indexOf('*') != -1) {
      var solution = handleClickMult(string);
    } else if (string.indexOf('/') != -1) {
      var solution = handleClickDivide(string);
    };
    // .. after that function runs, print answer in screen box
    screenContent
  }

// Set the function to run everytime the button is clicked:
addBtn.addEventListener('click', handleClickAdd);
subtBtn.addEventListener('click', handleClickSubt);
multBtn.addEventListener('click', handleClickMult);
divideBtn.addEventListener('click', handleClickDivide);
equalBtn.addEventListener('click', handleClickEqual);
});
