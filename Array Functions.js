let numbers = [1, 2, 3, 4, 5];

// usando el método .map()
let doubledNumbers = numbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// usando el método .filter()
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// usando el método .reduce()
let sum = numbers.reduce(function(acc, num) {
  return acc + num;
}, 0);
console.log(sum); // 15

// usando el método .sort()
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

// usando el método .forEach()
numbers.forEach(function(num) {
  console.log(num);
});
// imprime cada elemento en una nueva línea:
// 1
// 2
// 3
// 4
// 5

// usando el método .includes()
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false
