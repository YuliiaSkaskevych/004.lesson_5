let operation, result, number1, number2;
for (;;) {
    operation = prompt("Choose one of these operations: add, sub, mult, div", 'add');
    number1 = prompt("Input number 1");
    number2 = prompt("Input number 2");
    if (
        operation === "add" ||
        operation === "sub" ||
        operation === "mult" ||
        operation === "div"
    )
        break;
}

num1 = Number(number1)
num2 = Number(number2)

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

