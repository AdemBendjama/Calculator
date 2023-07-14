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

function operate(num1,num2,operator){
    if(operator == "+"){
        return add(num1,num2);
    }else if(operator == "-"){
        return sub(num1,num2);
    }else if(operator == "*"){
        return mul(num1,num2);
    }else if(operator == "/"){
        return div(num1,num2);
    }

    return -1;
}