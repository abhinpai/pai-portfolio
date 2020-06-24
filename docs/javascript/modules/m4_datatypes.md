---
id: module4_datatypes
title: Does type matters 🤔
sidebar_label: "Module 4: Data Types"
description: Data types description
keywords:
    - DataType
    - Primitive
    - Non-Primitive
---

:::note Possible Interview Questions 🔎
  1. Does JS have have any type or is it strongly typed?
  2. What are the primitive and non-primitive datatypes?
  3. What is difference between global.isFinite and Number.isFinite?
  4. What is difference between global.parseInt/parseFloat and Number.parseInt/parseFloat?
  5. `null` vs `undefined`
  6. What is array and its methods?
  7. What is string and its methods?
  8. Template Literals in JS or String Interpolation?
:::

Yes, type matters a lot in all of the programming language. which is an identity to a variable.

There is overall 8 different datatype present in Javascript which is further divide into primitive and non-primitive

## Primitive Datatype
----

There are 7 primitive datatypes and these datatypes are immutable

### 1. Boolean

Boolean is just a true and false like any other programming language

### 2. Number 
🔸 Numbers represent both integer and floating value along with this two there there are many other types like

`Infinity` represent mathematical ♾️ which is special value greater than any number

```js
console.log(1/0); // infinity
console.log(Infinity); // Infinity
```

🔸`NaN` (Not a Number) is sticky, If any mathematical operation breaks it will return NaN

:::info Mathematical operations are safe

Doing Math is safe in Js. We can divide 1/0, treat non-numeric string or number to the expression, script will never not with fatal error (die). At worst case you can get NaN as a  result
:::

#### Number Extension Methods

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

This is literally small number. 

```js
// Default EPSILON Value
Number.EPSILON // 2.220446049250313e-16

Number.EPSILON.toFixed(20); // "0.00000000000000022204"
```

### 3. BigInt

Number type can not allow value larger than (2^53-1) and lesser than -(2^53-1) for this BigInt is rescuer. 

```js
const bigInt = 12345678901234567890n; // 'n' at the end represent bigint
```

### 4. Null

Null is a special value which doesn't belongs to any of the type. Its separate type all together.
Which simply represent zero, empty or nothing.

> In javascript `null` is a **Existing Object** and doesn't lead to **Null Pointer Exception**

### 5. Undefined

Undefined in like a null which stand out of the group. Undefined means **not assigned any value**

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

String datatype is most commonly used datatype to store textual data. In javascript there is no separate type for single character `char` like any other programming language.

#### String Extension Methods

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
Check if any string start with given string or not and return true or false <br/>

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

## Non-Primitive Datatype
Apart from 7 primitive datatype everything else is an Object in javascript <br/>
**Ex:** Array, function, Object, Set, Regexp etc are Object

### 1. Array

An array is most commonly used data type in all of the programming language to store list of objects.

#### Array Extension Methods

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
Add an object from front and push all the element

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.shift('🤾🏻‍♂️');
console.log(sports); // ['🤾🏻‍♂️', '⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
```

#### 🔸 Array.unshift
Remove element from the first and shift all the element one step before

```js
let sports = ['⛹🏻‍♂️', '🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
sports.unShift();
console.log(sports); // ['🏋🏻‍♀️', '🚵🏻‍♂️', '🤽🏻‍♀️'];
```

:::info Array Fact 😳
In javascript array can act as both `Queue` and `Stack` data structure
* If we perform `shift` and `push` operation then we can achieve `Queue`
* If we perform `push` and `pop` operation then we can achieve `Stack`
* Both push and unshift can add multiple items at once

Internally `sports[0]` is nothing but `object[0]` since array is an object everything behind the scene deals with an object
:::

## Template Literals - Expression Interpolation 

🔸 We can use `+` to concat a multiple string to construct a single string 

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




