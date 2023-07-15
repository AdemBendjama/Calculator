let nbr1 = null;
let nbr2 = null;
let operator = null;
let result = null;

const display = document.querySelector('.display input');

const numbers = document.querySelectorAll('.nbr');
const operators = document.querySelectorAll('.opr:not(.clear):not(.equals)');
const AC = document.querySelector('.clear');
const equals = document.querySelector('.equals');

console.log(numbers);
console.log(operators);
console.log(AC);
console.log(equals);

numbers.forEach(nbr => {
  nbr.addEventListener('click', () => {
    if(nbr2){
      nbr2 = null;
      result = null;
      display.value = nbr.innerHTML;
    }else{
      display.value += nbr.innerHTML;
    }
  })
});

operators.forEach(opr => {
  opr.addEventListener('click', () => {
    if(nbr1 && operator && display.value != '' && !(result)){
      nbr2 = parseFloat(display.value);
      result = operate(nbr1,nbr2,operator);
      display.value = format(result);
      nbr1 = result;
    }
    else if (display.value != '' && !(result)) {
      nbr1 = parseFloat(display.value);
      display.value = '';
    }
    operator = opr.innerHTML;
  })
});

equals.addEventListener('click', () => {
  if (nbr1 && operator && display.value != '' && !(result)){
    nbr2 = parseFloat(display.value);
    result = operate(nbr1,nbr2,operator);
    display.value = format(result);
    nbr1 = result;
  }
})

AC.addEventListener('click', () => {
  display.value = '';
  nbr1 = null;
  nbr2 = null;
  operator = null;
  result = null;
})

function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, opr) {
  if (opr == '+') {
    return add(num1, num2);
  }
  if (opr == '-') {
    return sub(num1, num2);
  }
  if (opr == '*') {
    return mul(num1, num2);
  }
  if (opr == '/') {
    return div(num1, num2);
  }

  return -1;
}


function format(nbr){
  if(nbr % 1 !== 0 && nbr.toString().split('.')[1].length > 3){
    return parseFloat(nbr.toFixed(3));
  }
  return parseFloat(nbr);
}
