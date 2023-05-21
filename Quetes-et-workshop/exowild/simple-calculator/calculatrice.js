const firstValue = parseInt(prompt("Enter a first value"));
const operator = prompt("Enter an operator");
const secondValue = parseInt(prompt("Enter a second value"));

function calculate(firstValue, operator, secondValue) {
  switch (operator) {
    case "+":
      console.log(firstValue + secondValue);
      break;
    case "-":
      console.log(firstValue - secondValue);
      break;
    case "*":
      console.log(firstValue * secondValue);
      break;
    case "/":
      console.log(firstValue / secondValue);
      break;
    default:
      console.log("Opérateur non valide");
  }
}

calculate(firstValue, operator, secondValue);
