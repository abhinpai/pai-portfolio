---
id: module1_basic
title: Basic is the foundation of all programming language 😇
sidebar_label: "Module 1: Basics"
---

<br/>

:::note Possible Interview Questions 🔎
  1. Interview Question 1?
  2. Interview Question 2?
:::

## ⭐️ A Story of `var`, `let` and `const`

<BulletSentence keyword="var">An old school technique to declare a variable</BulletSentence>
<BulletSentence keyword="let">An alternative to var and its a modern way to declare any variable</BulletSentence>
<BulletSentence keyword="const">Const values never gonna be replace once its declared</BulletSentence>

### The Story of Var 🌈

A variable can be declare as `var` or `let`. But even if we declare the variable with let, var is beast in it own way

🔸 `var` has no block scope meaning it can be access globally _(its subjective to strict mode)_

```ts
// var accessibility
if (true) {
  var superHero = "Super Man 🦸🏻‍♂️";
}

console.log(superHero); // Super Man 🦸🏻‍♂️
// The Variable scope still present outside the function block as well

// let accessibility
if (true) {
  let superHero = "Super Man 🦸🏻‍♂️";
}

console.log(superHero); // Error ❌, undefined
// let scope is restricted to the block
```

If a codeblock is inside a function then scope will remain to the function level

```js
function IAmIronMan() {
  if (true) {
    var isHeIronMan = true;
  }
  console.log(isHeIronMan);
}

IAmIronMan(); // true ✅
console.log(isHeIronMan); // ReferenceError: isHeIronMan is not defined
```

If `var` declared outside any function or block that instance will be assigned to the global object. which means a `window` object

🔸 `var` do tolerate re-declaration

```js
// var ignore and replace the old value with a new one
var superHero = "Iron Man";
var superHero = "Batman"; // Works pretty fine

// let is very arrogant
let superHero = "Iron Man";
let superHero = "Batman"; // SyntaxError: Identifier 'superHero' has already been declared
```

🔸 `var` variable(s) can be declare below their use

```js
// Example 1
function whoAmI() {
  superHero = "Iron Man";
  console.log(superHero);
  var superHero; // declaration is done after initialization 🛎
}

// Example 2
function whoAmI() {
  superHero = "Hulk";
  if (true) {
    var superHero; // declaration is done after initialization 🛎
  }
  console.log(superHero);
}
```

This behavior is called `Hoisting` (Raising) where all `var` are hoisted at global context

:::caution Note 📝
* Only declaration can be Hoist not an assignment
* During the execution all the variable declaration will go at the top of execution context
:::







<!-- Placement for the JSX components -->

export const CWord = ({children, color}) => (
    <span style={{color: color}}>{children}</span>
);

export const BulletSentence = ({children, keyword}) => (
  <p style={{fontSize: '22px', margin: '0'}}>
    <span style={{
        backgroundColor: '#0090d9',
        borderRadius: '6px',
        margin: '0',
        paddingLeft: '6px',
        paddingRight: '6px',
        color: 'white',
        paddingBottom: '2px'}}>{keyword}:</span>  {children}
  </p>
);
