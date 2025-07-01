const a= Number(prompt("Enter a:"));
const b = Number(prompt("Enter b:"));
const operation = prompt("enter operation: +, -, *, /");

let result;

switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      alert("Invalid syntax!");
      result = "undefined";
    }
    break;
  default:
    alert("Invalid operation.");
    result = "undefined";
}

  alert("Result: " + result);


