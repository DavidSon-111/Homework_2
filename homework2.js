// //1
// const arr = [
//   { name: "Temo", age: 25 },
//   { name: "Lasha", age: 21 },
//   { name: "Ana", age: 28 },
// ];
// function findUser(userArr) {
//   let userAge = userArr[0].age;
//   let name = userArr[0].name;
//   for (let i = 0; i < userArr.length; i++) {
//     if (userArr[i].age < userAge) {
//       userAge = userArr[i].age;
//       name = userArr[i].name;
//     }
//   }
//   return name;
// }

// console.log(findUser(arr));

// //2
// const user = {
//   name: "Davit",
//   lastName: "Aslanishvili",
//   age: 23,
// };

// function newUser(user) {
//   const newObj = {};
//   for (const field in user) {
//     newObj[field] = user[field];
//   }
//   return newObj;
// }

// const newUserObj = newUser(user);
// console.log(newUserObj);

// // 3
// let a, b;
// function roll() {
//   const dice = parseInt(Math.random() * 7) + 1;
//   return dice;
// }

// while (true) {
//   a = roll();
//   b = roll();
//   console.log(a, b);
//   if (a == 3) {
//     console.log("The winner is A");
//     break;
//   }
//   if (b == 3) {
//     console.log("The winner is B");
//     break;
//   }
// }
