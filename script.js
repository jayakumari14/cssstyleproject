// var a = prompt("enter age");

// if (a > 18) {
//   for (let i = 0; i < 5; i++) {
//     // Example: loop 5 times
//     console.log("eligible");
//   }
// } else {
//   console.log("not eligible");
// }

// var fun = function app() {
//   console.log("i am funny app");
//   return;
// };
// var a = fun();
// console.log(a);

// var arr = [10, 20, 30, 40, 50];

// arr.forEach((elm) => {
//   console.log("hello", elm);
// });

const arr = ["jaya", "goutham", "piyush", "sam", "krishna"];
// arr.forEach(function (val) {
//   if (val === "sam") {
//   } else {
//     console.log(val);
//   }
// });

// let newarr = arr.map((val) => {
//   return val + " " + "ji";
// });

// console.log(newarr);

const newarr = arr.filter(async (val) => {
  if (val === "jaya") {
    return true;
  }
});

console.log(await newarr);
