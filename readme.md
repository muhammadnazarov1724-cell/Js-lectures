# Callback
### Callback — ин функсияест, ки ҳамчун аргумент (арзиш) ба дохили функсияи дигар интиқол дода мешавад, то ки он дар оянда, пас аз иҷро шудани кадом як амал, даъват (кор фармуда) шавад.
## Metods
### ForEach
***Танҳо гузаштани элементҳо (иҷрои амалҳо)**
***arr.forEach((elem, ind, array) => {})**
```js
function solution(arr) {
  let sum = 1;
  arr.forEach((elem) => {
    sum *= elem
  })
  return sum
}
```
### Map
**Трансформатсия (тағйир додани) элементҳо**
**arr.map(function(item) { ... })**
```js
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(n => n * n);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

### Find
**Ҷустуҷӯи як элемент**
**arr.find(function(item) { ... })**
```js
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

let nonExistentUser = users.find(u => u.name === "David");
console.log(nonExistentUser); // undefined
```

### filter
**Филтратсияи элементҳо аз рӯи шарт**
**arr.filter(function(item) { ... })**
```js
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### Reduce
**Ҷамъбасти маълумот ба як қиммат**
**arr.reduce(function(accumulator, currentValue, index, array) { ... }, initialValue)**
```js
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, n) => acc + n, 0); // Начальное значение 0
console.log(sum); // 15
```

### Sort
**Сортировка (тартиб додан) дар ҷои худ**
**arr.sort(compareFunction)**
```js
let fruits = ["Banana", "Apple", "Orange", "Grapes"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Grapes", "Orange"]
```

### Some
**Санҷиш: оё ақаллан як элемент мувофиқ аст?**
**массив.some((element) => {});**
```js
const рақамҳо = [1, 3, 5, 8, 9];

const ҳастҶуфт = рақамҳо.some(num => num % 2 === 0);

console.log(ҳастҶуфт); // true (чунки 8 ҷуфт аст)
```

### Every
**Санҷиш: оё ҳамаи элементҳо мувофиқанд?**
**массив.every((element) => {});**
```js
const нархҳо = [100, 250, 400];

const ҳамаГрон = нархҳо.every(price => price > 0);

console.log(ҳамаГрон); // true (чунки ҳамаашон аз 0 калонанд)
```

### toSorted
**Сортировка бе мутатсия (тағйирот)**
**const sort = массив.toSorted();**
```js
const баҳоҳо = [5, 2, 4, 3];

// Массиви навро месозем
const баҳоҳоиТартибшуда = баҳоҳо.toSorted((a, b) => a - b);

console.log(баҳоҳо);               // [5, 2, 4, 3] (массиви аввала тағйир наёфт!)
console.log(баҳоҳоиТартибшуда);    // [2, 3, 4, 5] (массиви нав тартиб дода шуд)
```
