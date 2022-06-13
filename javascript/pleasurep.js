let fullName = prompt("Please input your name");
if (fullName == "") {
  prompt("Your name is required");
}
// else if (fullName == isNaN());  {
//     prompt("Your name is required");
// }
alert("Hello, " + fullName + " welcome to Pleasure Park.");
let age = prompt("please input your age for discount");
const costPrice = 1500;
const naira = "NGN";
let txt = "Your discount is ";
let discount;
let newPrice;

if (age < 10) {
  discount = 1 * costPrice;
  newPrice = costPrice - discount;
} else if (age < 18) {
  discount = 0.5 * costPrice;
  newPrice = costPrice - discount;
} else if (age < 27) {
  discount = 0.2 * costPrice;
  newPrice = costPrice - discount;
} else if (age < 46) {
  discount = 0.05 * costPrice;
  newPrice = costPrice - discount;
} else if (age < 65) {
  discount = 0.6 * costPrice;
  newPrice = costPrice - discount;
} else if (age == 65) {
  discount = 0.6 * costPrice;
  newPrice = costPrice - discount;
} else {
  discount = 1 * costPrice;
  newPrice = costPrice - discount;
}
if (newPrice == 0) {
  alert("welcome to pppark");
}


