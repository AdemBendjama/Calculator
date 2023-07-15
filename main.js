let nbr1 = null;
let nbr2 = null;
let operator = null;

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
    display.value += nbr.innerHTML;
  })
});

operators.forEach(opr => {
  opr.addEventListener('click', () => {
    if (display.value != '') {
      nbr1 = parseInt(display.value);
      operator = opr.innerHTML;
      display.value = '';
    }
  })
});

equals.addEventListener('click', () => {
  if (nbr1 && operator && display.value != ''){
    nbr2 = parseInt(display.value);
    let result = operate(nbr1,nbr2,operator);
    display.value = result;
  }
})

AC.addEventListener('click', () => {
  display.value = '';
  nbr1 = '';
  nbr2 = '';
  display.value = '';
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
