let operation, result;
for (;;) {
    operation = prompt("Choose one of these operations: add, sub, mult, div", 'add');
    if (
        operation === "add" ||
        operation === "sub" ||
        operation === "mult" ||
        operation === "div"
    )
        break;
    else (alert("You entered wrong operation! Please choose one of these operations: add, sub, mult, div"))
}
let number1 = prompt("Input number 1");
let number2 = prompt("Input number 2");
const num1 = Number(number1);
const num2 = Number(number2);

switch (operation) {
    case "add":
        result = num1 + num2;
        alert(`${num1}+${num2}=${result}`);
        break;
    case "sub":
        result = num1 - num2;
        alert(`${num1}-${num2}=${result}`);
        break;
    case "mult":
        result = num1 * num2;
        alert(`${num1}*${num2}=${result}`);
        break;
    case "div":
        result = num1 / num2;
        alert(`${num1}/${num2}=${result}`);
        break;
}

