---
id: module3_datatypes
title: Does type matters 🤔
sidebar_label: "Module 3: Data Types"
description: Data types description
---

import CustomText from '../../../src/components/customText/customText.jsx'

:::note Questions 🤔
  1. Does JS have any type or is it strongly typed?
  2. What are the primitive and non-primitive data types?
  3. What is the difference between global.isFinite and Number.isFinite?
  4. What is difference between global.parseInt/parseFloat and Number.parseInt/parseFloat?
  5. `null` vs `undefined`
  6. What is an array and its methods?
  7. What is a string and its methods?
  8. Template Literals in JS or String Interpolation?
  9. What is the difference between map and foreach
  10. What are the different ways to iterate over an array?
  11. How to achieve both stack and queue for an array?
  12. How can we shuffle array elements?
  13. Different ways to empty an array
  14. Remove duplicated from an array
  15. How do you flatten an array
  16. What are the different ways to merge and concat an array? 
  17. What is a symbol and what is the benefit of using `symbol`
:::

Yes, type matters a lot in all of the programming languages. which is an identity to a variable.

There is an overall 8 different datatype present in Javascript which is further divided into primitive and non-primitive

## Primitive Datatype
----

There are 7 primitive data types and these datatypes are immutable

### 1. Boolean

Boolean is just true and false like any other programming language

### 2. Number 
🔸 Numbers represent both integer and floating value along with this two there are many other types like

`Infinity` represent mathematical ♾️ which is special value greater than any number

```js
console.log(1/0); // infinity
console.log(Infinity); // Infinity
```

🔸`NaN` (Not a Number) is sticky, If any mathematical operation breaks it will return NaN

:::info Mathematical operations are safe

Doing Math is safe in Js. We can divide 1/0, treat non-numeric string or number to the expression, the script will never not with a fatal error (die). At worst case, you can get NaN as a  result
:::

<CustomText styleClass="heading-1 primary">Number Extension Methods</CustomText>

#### 🔸 Binary and Octal Literals 
 
```js
console.log(parseInt(101, 2)); // 5
console.log(parseInt(111, 3)); // 13
```

`0b` or `0B` prefix to number represent binary integer literals

```js
console.log(parseInt(0b001)); // 1
console.log(parseInt(0B111)); // 7
```

`0o` or `0O` prefix to number represent octal integer literals

```js
console.log(parseInt(0o001)); // 1
console.log(parseInt(0O111)); // 7
```

`0x` or `0X` prefix to number represent hexadecimal integer literals

```js
console.log(parseInt(0x0ff)); // 255
console.log(parseInt(0Xf00)); // 3840
```

#### 🔸 Number.isFinite 

```js
Number.isFinite(NaN); // False
Number.isFinite(Infinity); // False
Number.isFinite(-Infinity); // False
Number.isFinite(1/0); // True
```

:::info global.isFinite Vs Number.isFinite 
When we execute global.isFinite it internally concise to Number.isFinite and does the same job
same for parseInt and parseFloat
:::

#### 🔸 Number.parseInt

```js
console.log(Number.parseInt(0b001)); // 1
console.log(Number.parseInt(0B111)); // 7
```

#### 🔸 Number.parseFloat

```js
console.log(Number.parseFloat(0b001)); // 1
console.log(Number.parseFloat(0B111)); // 7
```

#### 🔸 Number.isInteger

```js
console.log(Number.isInteger(Infinite)); // False
console.log(Number.isInteger(-1000)); // True
```

#### 🔸 Number.EPSILON

This is a literally small number. 

```js
// Default EPSILON Value
Number.EPSILON // 2.220446049250313e-16

Number.EPSILON.toFixed(20); // "0.00000000000000022204"
```

### 3. BigInt

Number type can not allow value larger than (2^53-1) and lesser than -(2^53-1) for this BigInt is the rescuer. 

```js
const bigInt = 12345678901234567890n; // 'n' at the end represent bigint
```

### 4. Null

Null is a special value that doesn't belong to any of the types. Its separate type altogether.
Which simply represents zero, empty, or nothing.

> In javascript `null` is a **Existing Object** and doesn't lead to **Null Pointer Exception**

### 5. Undefined

Undefined in like a null which stands out of the group. Undefined means **not assigned any value**

If any variable is declared and used that variable without assigning any value that that will return undefined

```js
let scientist;
console.log(scientist); // undefined
```

Null and undefined both are primitive and falsy value

```js
let astronomer = null;
console.log(typeOf(astronomer)); // object

let scientist;
console.log(typeOf(scientist)); // undefined
```

Null and undefined both are different type but share some similar functionality

```js
console.log(null == undefined); // true

let scientist;
console.log(null !== undefined); // true
```

double equal test for the loose equality and perform `type coercion`.

> Javascript is both dynamically typed language meaning its strongly and weakly typed game. And all the master game is being played by `COERCION`. This is kind of debatable topic

### 6. String

A string datatype is the most commonly used datatype to store textual data. In javascript, there is no separate type for single character `char` like any other programming language.

<CustomText styleClass="heading-1 primary">String Extension Methods</CustomText>

#### 🔸 charAt 
Return character for a given index (subscript) value <br/>

#### 🔸 toUpperCase 
Convert sting to uppercase <br/>

#### 🔸 toLowerCase 
Convert string to lowercase <br/>

#### 🔸 indexOf 
Get the index of given character from the beginning of the string  <br/>

#### 🔸 lastIndexOf 
Get the index of given character from the end of the string  <br/>

#### 🔸 include 
Check if string include given string or not and return true or false <br/>

#### 🔸 startWith 
Check if any string starts with given string or not and return true or false <br/>

#### 🔸 endsWith 
Check if any string ends with given string or not and return true or false <br/>

#### 🔸 slice 
Break the string based on given character and return an array <br/>

#### 🔸 subString 
Return part of the string <br/>

#### 🔸 codePointAt 
Return code for the character at position <br/>

#### 🔸 frameCodePoint 
Create character by its numeric code <br/>

#### 🔸 padStart 
Add space at the beginning of the string based on the given value <br/>

### 7. Symbol

It’s a very peculiar data type. Once you create a `symbol`, its value is kept private and for internal use.
It represents a `unique` identifier.

One can create a symbol just by calling the Symbol() global factory function and upon creation, we can give the symbol a description (also called a symbol name)

```js
const hero = Symbol(); // Create a symbol
let id = Symbol("id"); // symbol(id) with provided symbol name
```

Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.

```js
const hero1 = Symbol();
const hero2 = Symbol();

console.log(Symbol() === Symbol()); // false
console.log(hero1 === hero2); // false
```

:::caution Remember
Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert.

```js
let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string
```

That’s a “language guard” against messing up because strings and symbols are fundamentally different and should not accidentally convert one into another.

If we want to show a symbol, we need to explicitly call .toString() on it

```js
let id = Symbol("id");
alert(id.toString()); // Symbol(id)
```
Or get `symbol.description` property to show the description only

```js
let id = Symbol("id");
alert(id.description); // id
```
:::

#### Hidden properties of symbol

Symbols allow us to create the `hidden` properties of an object, that no other part of code can accidentally access or overwrite.

```js
let user = { name: "John" };

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access symbol as a key
```

#### What’s the benefit of using Symbol("id") over a string "id"?
The best benefit is to avoid the name clash since symbol creates a new instance even with the same name we can eliminate the risk of name collision and these hidden properties can be used for the internal functionality purpose.

Consider you have a user object which is used by much other class in your project but you want to add one more key with the same property present in a user object you can achieve that with the symbol. 

This is also called `symbol literal` for an object

```js
let user = { name: "Abhin Pai" };
user.name = "Abhin"; // it will override the previous value i.e Abhin Pai 

let name = Symbol("name");
user[name] = "Abhin"; // Created new hidden property with same name

console.log(user); // {name: "Abhin", Symbol(name): "Abhin"}
```

:::caution Remember
* Symbols are not enumerated, which means that they do not get included in a for..of or for..in loop ran upon an object.
* Symbols are not part of the Object.keys() or Object.getOwnPropertyNames() result.
* You can access all the symbols assigned to an object using the Object.getOwnPropertySymbols() method.

  ```js
  let user = { name: "John" };
  let id = Symbol("id");

  user[id] = 1;

  Object.getOwnPropertySymbols(user); // [Symbol(id)]
  ```
:::

#### Global Symbol

Usually, all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be the same entities. For instance, different parts of our application want to access symbol "name" meaning exactly the same property.

To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

This checks the global registry if there is a symbol described by a key then it will return else it will create a new one by the given key in the registry and return it 

```js
// read from the global registry
let name = Symbol.for("name"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let myName = Symbol.for("name");

console.log( id === idAgain ); // true
```

:::info GLobal Symbol
Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
:::

There are various other `symbol` method which serves different purposes

#### * Symbol.keyFor
Not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol

#### * Symbol.hasInstance
#### * Symbol.isConcatSpreadable
#### * Symbol.iterator
#### * Symbol.toPrimitive

## Non-Primitive Datatype
----

Apart from 7 primitive datatype everything else is an Object in javascript <br/>
**Ex:** Array, function, Object, Set, Regexp etc are Object

### 1. Array

An array is the most commonly used data type in all of the programming languages to store a list of objects.

<CustomText styleClass="heading-1 primary">Array Extension Methods</CustomText>

#### 🔸 Array.push
Pushing new element at the end of the queue AKA `enqueue`

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.push('🤾🏻‍♂️');
console.log(sports); // ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️', '🤾🏻‍♂️'];
```

#### 🔸 Array.pop
Removing new element at the end of the queue AKA `dequeue`

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.pop();
console.log(sports); // ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
```

#### 🔸 Array.shift
Add an object from the front and push all the element

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.shift('🤾🏻‍♂️');
console.log(sports); // ['🤾🏻‍♂️', '⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
```

#### 🔸 Array.unshift
Remove element from the first and shift all the elements one step before

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.unShift();
console.log(sports); // ['🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
```

:::info Array Fact 😳
**Fact 1:** In javascript array can act as both `Queue` and `Stack` data structure
* If we perform `shift` and `push` operation then we can achieve `Queue`
* If we perform `push` and `pop` operation then we can achieve `Stack`

**Fact 2:** Both push and unshift can add multiple items at once

**Fact 3:** Internally `sports[0]` is nothing but `object[0]` since the array is an object everything behind the scene deals with an object. 

```js
  let expression = ['🤣','🥳','😡'];
  let humanExpression = expression;

  console.log(expression); // ['🤣','🥳','😡']
  console.log(humanExpression); // ['🤣','🥳','😡']
  console.log(expression === humanExpression); // true

  expression.pop();

  console.log(expression); // ['🤣','🥳']
  console.log(humanExpression); // ['🤣','🥳']
```
Notice above snippet I declared `expression` array and assigned to `humanExpression` array and did a comparison and the result is true. Then I removed one element from the `expression` array and logged both array and the changes are also reflected in `humanExpression` array. This is because when we assign one object to another object both object will refer to the same address 

**Fact 4:** Since an array is an object we can add a different kind of property to an array as a property

```js
let expressions = ['🤣','🥳','😡'];
expressions[9999] = "humanExp"; // assigning value to random subscript value
expressions.totalEmoji = 3; // create property with arbitrary name
console.log(expressions); // ["🤣", "🥳", "😡", empty × 9996, "humanExp", totalEmoji: 3]
```

In the log, we can see `empty x 9996` since we have added value at position 9999 js engine left the remaining empty positioned value
:::

#### 🔸 Array.spice
Splice can be used to delete an array element

```js 
let message = ['I', '❤️', 3000];
delete message[0];
console.log(message); // ❤️ 3000
console.log(message.length) // 3 WTF 🤷🏻‍♂️  
```

In the above code, we created an array, and then we deleted an item from position one but the length of the array is still 3.
This is because the `delete` keyword will just delete content but space will remain. Which cost the memory hence `delete` keyword is not recommended solution to delete any item

So to solve this problem we can use `splice`

```js
let message = ['I', '❤️', 3000];
message.splice(0,1);
console.log(message); // ❤️ 3000
console.log(message.length) // 2 👍🏻
```

We can also play more with `splice`

```js
let message = ['I', '❤️', 3000];
message.splice(2,1, "India");
console.log(message); // ["I", "❤️", 3000]
console.log(message) // ["I", "❤️", "India"]
```

#### 🔸 Array.concat

To merge two arrays different array into one single array

#### 🔸 Array.slice

`slice` is used to split an array into smaller array chunk

```js
let hero = ['H','U','L','K'];
let removedItem = hero.splice(1,2); 
console.log(hero); // ['H', 'K']
console.log(removedItem); // ['U', 'L']
```

We can use `slice` without an arg to create a copy of an original array without affecting the original one 

#### 🔸 Array.indexOf

Look for an array item based on a given index and return item else it will return -1

#### 🔸 Array.lastIndexOf

Same as indexof but Look for an array item from the end and based on a given index and return item else it will return -1

#### 🔸 Array.includes

Look for a given item in the array and return true if it found else it will return false

#### 🔸 Array.isArray

Similar to typeOf for an array

#### 🔸 Array.sort

Sort the given array item

```js
let numbers = [1, 15, 2];
console.log(numbers.sort((a,b) => a-b)); // [1, 2, 15] peace ✌️
```

Am I lying? 🤔 even after sorting it dint sort why? 🤯
This is because javascript converts an array element to string for comparison and for sort it in string lexicographic order (Like Dictionary order)

to achieve sorting we need to struggle a bit 

#### 🔸 Array.reverse

```js
let numbers = [1, 15, 25];
console.log(numbers.reverse(); // [25, 15, 1] 
```

#### Iterate over an array

#### 🔸 While loop

 ```js
 while (success) {
  try();
}
 ```

#### 🔸 for loop

```js
for(let i=0; i< 10;  i++) {
  // do some operation
}
```

#### 🔸 for each loop

```js
let expressions = ['🤣','🥳','😡'];
forEach(let expression in expressions) {
  console.log(expression);
}
```

> `forEach` loop does not provide an index of an item

#### 🔸 map

```js
let expressions = ['🤣','🥳','😡'];
let result = expressions.map((expression, index) => {
  return {expression, index};
});
console.log(result) // object {expression:'🤣', index: 0 } ......
```

> `map` will provide an index of an item

#### 🔸 reduce
as the name says it reduces the array item and resulting in a single result 

```js
const marks = [87, 98, 55, 67, 70, 59];
var total = (memorizedValue, initialValue) => (memorizedValue+initialValue);
console.log(marks.reduce(total)); // 436
```

#### 🔸 filter

To filter the array item based on boolean expression

```js
const numberList = [87, 98, 55, 67, 70, 59];
const getEvenNumbers = (number) => (number%2 ===0);
console.log(numberList.filter(getEvenNumbers)); // [98, 70]
```

#### 🔸 every

When we want to check the given condition is satisfied with all array element or not 

```js
const numberList = [-87, 98, 0, Infinity, NaN, 59];
var checkPositiveNumber = (number) => number > 0;
console.log(numberList.every(checkPositiveNumber)); // false
```

#### 🔸 some

When we want to check the given condition is satisfied with at least some array element or not 

```js
const numberList = [-87, 98, 0, Infinity, NaN, 59];
var checkPositiveNumber = (number) => number > 0;
console.log(numberList.some(checkPositiveNumber)); // true
```

## Template Literals - Expression Interpolation 
----

🔸 We can use `+` to concat multiple strings to construct a single string 

```js
let number = '3000';
let hero = 'Iron Man';
console.log("I love" + number + "Says" + hero); // I Love 3000 Says Iron Man ;
```
🔸 To make it more robust we can use `String Interpolation`


```js
let number = '3000';
let hero = 'Iron Man';
console.log(`I love ${number} Says ${hero}`); // I Love 3000 says Iron Man;
```

