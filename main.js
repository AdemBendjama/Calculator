let nbr1 = null;
let nbr2 = null;
let operator = null;
let result = null;

const display = document.querySelector('.display input');

const numbers = document.querySelectorAll('.nbr:not(.point)');
const operators = document.querySelectorAll('.cal');
const equals = document.querySelector('.equals');
const point = document.querySelector('.point');
const abs = document.querySelector('.abs');
const AC = document.querySelector('.clear');
const DEL = document.querySelector('.delete');


numbers.forEach(nbr => {
  nbr.addEventListener('click', () => {
    if (!isNaN(result)) {
      if (nbr2) {
        nbr2 = null;
        result = null;
        display.value = nbr.innerHTML;
      } else {
        display.value += nbr.innerHTML;
      }
    }
  })
});

operators.forEach(opr => {
  opr.addEventListener('click', () => {
    if (display.value != '' && !(result) && !isNaN(result)) {
      if (nbr1 && operator) {
        cal();
      }
      else {
        nbr1 = parseFloat(display.value);
        display.value = '';
      }
    }
    operator = opr.innerHTML;
  })
});

point.addEventListener('click', () => {
  if (display.value != '' && !isNaN(result) && !(nbr2) && checkFloat(display.value)) {
    display.value += point.innerHTML;
  }
})

equals.addEventListener('click', () => {
  if (nbr1 && operator && (display.value != '') && !(result) && (!isNaN(result))) {
    cal();
  }
})

abs.addEventListener('click', () => {
  if (display.value != '' && !(result)){
    if(checkPostive(display.value)){
      display.value = '-'+display.value;
    }else{
      display.value = display.value.slice(1)
    }
  }
})

AC.addEventListener('click', () => {
  display.value = '';
  nbr1 = null;
  nbr2 = null;
  operator = null;
  result = null;
})

DEL.addEventListener('click', () => {
  if (display.value != '' && !(result)) {
    display.value = display.value.toString().slice(0, -1);
  }
})

function cal() {
  nbr2 = parseFloat(display.value);
  result = operate(nbr1, nbr2, operator);
  display.value = format(result);
  nbr1 = result;
}

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
    if (num2 == 0) return 'Math Error';
    return div(num1, num2);
  }

  return -1;
}

function checkPostive(nbr){
  if(parseFloat(nbr)>0){
    return true;
  }
  return false;
}
function checkFloat(nbr) {
  if (nbr.toString().split('.').length == 1) {
    return true;
  }
  return false;
}

function format(nbr) {
  if (!isNaN(nbr)) {
    if (nbr % 1 !== 0 && nbr.toString().split('.')[1].length > 3) {
      return parseFloat(nbr.toFixed(3));
    }
  }
  return nbr;
}
