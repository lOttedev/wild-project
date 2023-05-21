const a = 2;
const b = 2;
const c = 4;

if (a === b && b === c && a === c) {
  console.log("the three variable are the same");
}
if (a === b || b === c || a === c) {
  console.log("Two of the variables are the same");
} else {
  console.log("all variables are different");
}
