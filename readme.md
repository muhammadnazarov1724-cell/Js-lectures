# Array
## 1. Массив чист?
Массив як маҷмӯи мураттабшудаи маълумотҳо аст, ки таҳти як ном нигоҳ дошта мешавад. Массивро ҳамчун як қуттии дорои бахшҳо тасаввур кунед, ки дар он ҳар як бахш рақамгузорӣ шудааст. Шумо метавонед дар ҳар як бахш ягон объект ё арзишро ҷойгир кунед.

Идеяи асосӣ: Массивҳо имкон медиҳанд, ки бисёр арзишҳо дар як тағйирёбанда нигоҳ дошта шаванд.

Намудҳои маълумот: Дар массив ҳама гуна намудҳои маълумотро нигоҳ доштан мумкин аст: ададҳо, сатрҳо, объектҳо, дигар массивҳо ва ҳатто функсияҳо. Шумо метавонед намудҳои гуногуни маълумотро дар як массив омехта кунед.
## Metods
- **push()**
**Ба охир илова кардан**
**Синтаксис - arr.push(items...)**

```js
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]
```

- **pop()**
**Аз охир нест кардан**
**Синтаксис - arr.push(items...)**

```js
let fruits = ["Apple", "Banana", "Orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "Orange"
console.log(fruits); // ["Apple", "Banana"]
```

- **shift()**
**Аз аввал нест кардан**
**Синтаксис - arr.shift()**

```js
let fruits = ["Apple", "Banana", "Orange"];
let firstFruit = fruits.shift();
console.log(firstFruit); // "Apple"
console.log(fruits); // ["Banana", "Orange"]
```

- **unshift()**
**Ба аввал илова кардан**
**Синтаксис - arr.unshift(items...)**

```js
let fruits = ["Banana", "Orange"];
fruits.unshift("Apple", "Mango");
console.log(fruits); // ["Apple", "Mango", "Banana", "Orange"]
```

- **splice()**
**Илова/Нест/Иваз кардан**
**Синтаксис - arr.splice(idx, n, items...)**

```js
let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Grapes", "Kiwi"); // Удалить 1 элемент со 2-го индекса и вставить 2 новых
console.log(fruits); // ["Apple", "Grapes", "Kiwi", "Orange"]
```

- **concat()**
**Массивҳоро муттаҳид кардан**
**Синтаксис - arr.concat(arrs/items...)**

```js
let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Orange", "Grapes"];
let fruits3 = ["Mango"];
let allFruits = fruits1.concat(fruits2, fruits3, "Kiwi");
console.log(allFruits); // ["Apple", "Banana", "Orange", "Grapes", "Mango", "Kiwi"]
```

- **reverse()**
**Баръакс кардан**
**Синтаксис - arr.reverse()**

```js
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
```