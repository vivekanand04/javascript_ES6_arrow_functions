// queation 1. pichla video me jo map filter reduce find etc padha hai usme arrow function ka use karo
//question 2. pahle jo mapping padha tha usme bhi arrow function lagaao

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

////Map -Create a new array by doing something with each item in an array.

// var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.map(function double(x) {
//   return x * 2;
// });
// step to make upward into equivalent arrow
// remove double ,koi fark nahi padega
// remove  function also
// here x*2 is a single line code so remove return also also u can remove {}also
//and use => symbol after variable x
//final code is given below
// var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.map(x => x * 2);
// console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
// var numbers = [3, 56, 2, 48, 5];
// const newNumbers = numbers.filter(num => num < 10);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var numbers = [3, 56, 2, 48, 5];
// var newNumber = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);
// console.log(newNumbers);

////Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];
// const newNumber = numbers.find(num => num > 10
// );
// console.log(newNumbers);
