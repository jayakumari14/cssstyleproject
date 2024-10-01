// var a = prompt("enter age");

// if (a > 18) {
//   for (let i = 0; i < 5; i++) {
//     // Example: loop 5 times
//     console.log("eligible");
//   }
// } else {
//   console.log("not eligible");
// }

var fun = function app() {
  console.log("i am funny app");
  return;
};
var a = fun();
console.log(a);

var arr = [10, 20, 30, 40, 50];

arr.forEach((elm) => {
  console.log("hello", elm);
});
