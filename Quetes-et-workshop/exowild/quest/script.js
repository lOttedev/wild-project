console.log(typeof 1);
typeof 1;

console.log(typeof true);
// "string")


console.log(typeof null);
// "object"

const person = "Not Bob";

if (person === "Bob") {
  console.log("Hello, Bob!");
} else {
  console.log("You're not Bob, go away!");
}

const passWord = prompt("What's the password?");
console.log(passWord);

if (passWord === "sockyFesse") {
    console.log("Welcome! 👋");
  } else {
    console.log("Wrong password! ❌");
  };

  
const age = prompt("How old are you?");
console.log(typeof(age));
// String

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));
// Number