const rightPrice = Math.ceil(Math.random() * 100);
let userName = prompt("Please enter your name");
let isGessed = false;

while (!isGessed) {
  let userNumber = Number(prompt("Please enter a number between 1 and 100"));

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    alert("Make sure you entered a valid number");
  } else {
    if (rightPrice > userNumber) {
      alert("is more");
    }
    if (rightPrice < userNumber) {
      alert("is less");
    }
    if (rightPrice === userNumber) {
      alert(userName + "You found the number");
      isGessed = false;
    }
  }
}

/* Autre solution :
const randomNumber = Math.ceil(Math.random() * 100);
const userName = prompt("Give your username");
let userChoice = prompt("Give a number between 1 and 100");

while (randomNumber !== parseInt(userChoice)) {
  if (randomNumber < parseInt(userChoice)) {
    userChoice = prompt("It's less !");
  } else {
    userChoice = prompt("It's more !");
  }
}

alert(`Well played ${userName} !`); */

/*if (userNumber > rightPrice) {
  alert("c'est moins");
}
if (userNumber < rightPrice) {
  alert("c'est plus");
}
if (userNumber == rightPrice) {
  alert(userName + " gagne!");
}

console.log(userName);
console.log(rightPrice);*/
